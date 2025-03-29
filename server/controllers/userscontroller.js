require('dotenv').config();
const { generateToken } = require('../utils/token');
const { hashPassword, verifyPassword } = require('../utils/hashUtil');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
// const { generateRandomPassword } = require('../utils/randomPassword');

// Function to create a new user/register
const registerUser = async (req, res) => {
    const { name, balance, email, dmat_acc_no, pan, gender, phone, password, role } = req.body;

    if (!name || !balance || !email || !dmat_acc_no || !pan || !gender || !phone || !role) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingUser = await userModel.findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }

        // Generate and hash password
        // const password = generateRandomPassword(8, true);
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.createUser(name, balance, email, hashedPassword, dmat_acc_no, pan, gender, phone, role);

        if (newUser) {
            return res.status(201).json({ message: 'User registered successfully', user: newUser });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Function for logging in
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const result = await userModel.findUserByEmail(email);
        if (!result) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare hashed password
        const isPasswordMatch = await bcrypt.compare(password, result.password_hash);
        if (!isPasswordMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const userData = {
            id: result.id,
            email: result.email,
            name: result.name,
            pan: result.pan,
        };

        const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('jwttoken', token, {
            expires: new Date(Date.now() + 86400000),
            httpOnly: true,
            sameSite: 'None',
            secure: true,
        });

        return res.status(200).json({
            message: 'Login Successful',
            user: { ...result, password_hash: undefined },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Logout function
const logout = async (req, res) => {
    res.clearCookie('jwttoken', {
        httpOnly: true,
        sameSite: 'None',
        secure: true,
    });
    res.status(200).json({ message: 'Logged out' });
};

// Function to update user details
const updateUser = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    const { name, balance, email, password, dmat_acc_no, pan, gender, phone, role} = req.body;

    try {
        const updatedFields = {};
        if (name) updatedFields.name = name;
        if (balance) updatedFields.balance = balance;
        if (email) updatedFields.email = email;
        if (dmat_acc_no) updatedFields.dmat_acc_no = dmat_acc_no;
        if (pan) updatedFields.pan = pan;
        if (gender) updatedFields.gender = gender;
        if (phone) updatedFields.phone = phone;
        if (role) updatedFields.role = role;

        // Hash new password if provided
        if (password) {
            updatedFields.password_hash = await bcrypt.hash(password, 10);
        }

        if (Object.keys(updatedFields).length === 0) {
            return res.status(400).json({ error: 'No fields provided to update' });
        }

        const updatedUser = await userModel.updateUser(id, updatedFields);
        return res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Function to delete a user
const deleteUser = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: 'User ID is required' });
    }
    try {
        const deletedUser = await userModel.deleteUser(id);
        return res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

//update balance

const updateBalance = async (req, res) => {

    const { balance, id } = req.body;
    console.log(balance, id);

    try { 
        const updatedUser = await userModel.updateUserBalance(id, balance);
        return res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    logout,
    updateBalance
};
