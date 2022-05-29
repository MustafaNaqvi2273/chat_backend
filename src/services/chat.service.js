const mongoose = require('mongoose');
const ChatRoom = require('../models/chatRooms');

export const createChatRoom = async(data) => {
    const newRoom = await ChatRoom.create(data)
    return newRoom;
}

export const getAllRooms = async() => {
    const rooms = await ChatRoom.find()
    return rooms;
}

export const getRoom = async(data) => {
    const room = await ChatRoom.findOne({_id: data.roomId})
    return room;
}