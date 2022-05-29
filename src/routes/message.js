const express = require('express')
const middleware = require('../middlewares/auth');
const messageController = require('../controllers/message.controller');
const { validateSchema } = require('../middlewares/validation');
const { createNewMesageSchema, getRoomMessagesSchema } = require('../schema/message.schema')

const router = express.Router()

router.post('/sendMessage', middleware.verifyAuthToken, validateSchema(createNewMesageSchema), messageController.createNewMessage)
router.get('/messages/:roomId', middleware.verifyAuthToken, validateSchema(getRoomMessagesSchema), messageController.getAllMessages)

module.exports = router;