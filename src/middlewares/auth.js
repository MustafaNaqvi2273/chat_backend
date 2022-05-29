const jwt = require('jsonwebtoken');
const config = require('../config');

export const verifyAuthToken = async(req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(400).send("Invalid User");
    }
    try{
        const decoded = jwt.verify(token, config.jwt.secret)
        req.user = decoded
    }
    catch(err){
        return res.status(500).send("Invalid Token");
    }
    next()
}