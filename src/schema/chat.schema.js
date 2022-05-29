const Joi = require('joi')

export const createRoomSchema = Joi.object().keys({
    user1: Joi.objectId().required(),
    user1: Joi.objectId().required()
})

export const getChatRoomSchema = Joi.object().keys({
    roomId: Joi.objectId().required()
})