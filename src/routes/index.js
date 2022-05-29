const express = require('express')
const userRoute = require('./user');
const chatRoute = require('./chat');
const messageRoute = require('./message');

const router = express.Router();

router.use(userRoute)
router.use(chatRoute)
router.use(messageRoute)

module.exports = router;