const Joi = require('joi')

export const createNewMesageSchema = Joi.object().keys({
    sender_id: Joi.objectId().required(),
    receiver_id: Joi.objectId().required(),
    text: Joi.string().required()
})

export const getRoomMessagesSchema = Joi.object().keys({
    roomId: Joi.objectId().required()
})