const express = require('express');
const router = express.Router();
const { createUser, getUser, updateUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createUser);
router.get('/:id', authMiddleware, getUser);
router.put('/:id', authMiddleware, updateUser);
router.patch('/:id', authMiddleware, updateUser);

module.exports = router;
