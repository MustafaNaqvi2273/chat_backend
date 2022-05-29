const jwt = require('jsonwebtoken');
const config = require('../config');

export const generateNewToken = async(user) => {
    const token = jwt.sign(
        { user_id: user._id, email},
        config.jwt.secret,
        {
            expiresIn: "2h",
        }
    )
    return token
}