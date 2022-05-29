const _ = require('lodash')
const Joi = require('joi')
const messageService = require('../services/message.service');

export const createNewMessage = async(req, res) => {
    try{
        const new_message = await messageService.addNewMessage(req.body)
        return new_message
    }
    catch(err){
        res.status(500).send({ message: err })
    }
}

export const getAllMessages = async(req, res) => {
    try{
        const messages = await messageService.getRoomMessages(req.params)
        return messages
    }
    catch(err){
        res.status(500).send({ message: err })
    }
}