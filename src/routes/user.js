const express = require('express')
const middleware = require('../middlewares/auth');
const userController = require('../controllers/user.controller');
const { createUserSchema, searchUserSchema } = require('../schema/user.schema');
const { validateSchema } = require('../middlewares/validation');

const router = express.Router()

router.post('/login', userController.login)
router.post('/register', validateSchema(createUserSchema), userController.register)
router.get('/user/username', middleware.verifyAuthToken, validateSchema(searchUserSchema), userController.searchUser)

module.exports = router;