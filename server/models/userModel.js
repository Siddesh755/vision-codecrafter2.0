const { query } = require('../config/db');

// Function to find a user by email
const findUserByEmail = async (email) => {
    try {
        const sql = 'SELECT * FROM users WHERE email = $1;';
        const result = await query(sql, [email]);
        return result.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getUserById = async (id) => {
    try {
        const sql = 'SELECT * FROM users WHERE id = $1;';
        const result = await query(sql, [id]);
        return result.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Function to create a new user
const createUser = async (name, balance, email, password_hash, dmat_acc_no, pan, gender, phone, role) => {
    try {
        const sql = `INSERT INTO users (name, balance, email, password_hash, dmat_acc_no, pan, gender, phone, role)
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
                     RETURNING id, name, balance, email, dmat_acc_no, pan, gender, phone, role;`;
        const newUser = await query(sql, [name, balance, email, password_hash, dmat_acc_no, pan, gender, phone, role]);
        return newUser.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getAllUsersByRole = async (role) => {
    try {
        const sql = `SELECT user_id, name, balance, email, dmat_acc_no, pan, gender, phone FROM users WHERE role = $1 ORDER BY user_id ASC;`;
        const result = await query(sql, [role]);
        return result.rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Function to update a user
const updateUser = async (id, updatedFields) => {
    try {
        const fields = Object.keys(updatedFields);
        const values = Object.values(updatedFields);

        if (fields.length === 0) {
            throw new Error('No fields to update');
        }

        const setClause = fields.map((key, index) => `${key} = $${index + 1}`).join(', ');
        const sql = `UPDATE users SET ${setClause} WHERE user_id = $${fields.length + 1} RETURNING *;`;
        
        const result = await query(sql, [...values, id]);
        return result.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Function to delete a user
const deleteUser = async (id) => {
    try {
        const sql = `DELETE FROM users WHERE user_id = $1 RETURNING *;`;
        const result = await query(sql, [id]);
        return result.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getUserCount = async () => {
    try {
        const sql = 'SELECT COUNT(*) FROM users WHERE role = $1;';
        const result = await query(sql, ['user']);
        return { Users: result.rows[0].count };
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getUsers = async () => {
    try {
        const sql = 'SELECT user_id, name, email FROM users;';
        const result = await query(sql);
        return result.rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getUserByEmail = async (email) => {
    try {
        const sql = 'SELECT * FROM users WHERE email = $1;';
        const result = await query(sql, [email]);
        return result.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// updateUserBalance
const updateUserBalance = async (id, balance) => {
    try {
        const sql = 'UPDATE users SET balance = $1 WHERE id = $2 RETURNING *;';
        const result = await query(sql, [balance, id]);
        return result.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = {
    findUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    getUserCount,
    getAllUsersByRole,
    getUserById,
    getUsers,
    getUserByEmail,
    updateUserBalance
};
