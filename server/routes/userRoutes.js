const express = require('express');
const { registerUser, loginUser, updateUser, deleteUser, logout, updateBalance   } = require('../controllers/userscontroller');
const { jwtAuthMiddleware, } = require('../middlewares/jwtAuthMiddleware');

const router = express.Router();


router.post('/register',registerUser);

router.post('/login', loginUser);

// router.get('/', jwtAuthMiddleware); 
router.put('/update/:user_id', jwtAuthMiddleware, updateUser);
router.delete('/delete/:user_id', jwtAuthMiddleware, deleteUser);

router.post("/logout",logout)

router.put('/balance', updateBalance);

module.exports = router;
