const chatService = require('../services/chat.service');
const _ = require('lodash')
const Joi = require('joi')

export const createRoom = async(req, res) => {
    try{
        const new_room = await chatService.createChatRoom(req.body)
        if(new_room){
            return res.status(200).send({ data: new_room, message: 'Chat Room Created Successfully'})
        }
    }
    catch(err){
        res.status(500).send({ message: err })
    }
}

export const getRooms = async(req, res) => {
    try{
        const rooms = await chatService.getAllRooms()
        return rooms
    }
    catch(err){
        res.status(500).send({ message: err })
    }
}

export const getChatRoom = async() => {
    try{
        const chat_room = await chatService.getRoom(req.params)
        if(chat_room && chat_room._id){
            return res.status(200).send({ data: chat_room, message: 'Chat Room Found Successfully'})
        }
    }
    catch(err){
        res.status(500).send({ message: err })
    }
}