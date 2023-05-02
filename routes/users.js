const express = require('express');
const { addUser, deleteUser, getUsers, updateUser } = require('../controllers/user');

const router = express();
router.get('/', getUsers);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);