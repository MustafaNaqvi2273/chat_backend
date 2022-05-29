const joi = require('joi');
const _ = require('lodash');
const { pick } = require('lodash');

export const validateSchema = (schema) => (req, res, next) => {

    const objectToValidate = pick(req, ['params', 'query', 'body']);
    const { error, value } = joi.validate(objectToValidate, schema);

    if (!_.isNull(error)){
        return res.send({ code: 400, message: error.details[0].message });
    }

    Object.assign(req, value);
    return next();
}