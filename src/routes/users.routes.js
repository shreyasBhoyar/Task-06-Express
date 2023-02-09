const express = require('express');
const { getAllUsers, createUser, getUserById, deleteUser, UpdateUser, ValidateUser } = require('../controllers/users.controller');

const router = express.Router()


router.route("").get(getAllUsers).post(ValidateUser ,createUser)
router.route("/:id").get(getUserById).patch(UpdateUser).delete(deleteUser)

module.exports = router;