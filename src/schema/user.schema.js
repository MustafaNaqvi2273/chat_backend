const Joi = require('joi');

export const createUserSchema = Joi.object().keys({
    full_name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: Joi.string().required(),
    username: Joi.string().optional(),
})

export const searchUserSchema = Joi.object().keys({
    name: Joi.string().optional()
})