const mongoose = require('mongoose');
const Messages = require('../models/messages');

export const addNewMessage = async(data) => {
    const new_message = await Messages.create(data)
    return new_message
}

export const getRoomMessages = async(params) => {
    const messages = await Messages.find({ roomId: params.roomId })
    return messages
}