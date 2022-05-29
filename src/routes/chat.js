const express = require('express')
const middleware = require('../middlewares/auth');
const chatController = require('../controllers/chat.controller');
const { validateSchema } = require('../middlewares/validation');
const { createRoomSchema, getChatRoomSchema } = require('../schema/chat.schema');

const router = express.Router()

router.post('/create', middleware.verifyAuthToken, validateSchema(createRoomSchema), chatController.createRoom)
router.get('/rooms', middleware.verifyAuthToken, chatController.getRooms)
router.get('/room/:roomId', middleware.verifyAuthToken, validateSchema(getChatRoomSchema), chatController.getChatRoom)

module.exports = router;