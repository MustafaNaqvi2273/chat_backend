const _ = require('lodash');
const bcrypt = require('bcrypt');
const userService = require('../services/user.service');
const { generateNewToken } = require('../services/authToken.service');

export const login = async(req, res) => {
    const { email, password } = req.body
    const user = await userService.getUserByEmail(email)
    if(!user || !(await user.validatePassword(password))){
        return res.status(500).send({ error: 'Invalid User!' })
    }
    const token = await generateNewToken(user)
    user.token = token;
    return res.status(200).send({ data: user, message: 'Logged In Successfully' })
}

export const register = async(req, res) => {
    try{
        const oldUser = await userService.getUserByEmail(req.body.email);
        if(oldUser){
            return res.status(409).send({message: "User Already Exist"});
        }
        const new_user = {...req.body}
        new_user.password_hash = bcrypt.hashSync(req.body.password, 10);
        console.log('new user', new_user)
        const _user = await userService.createUser(req.body)
        const token = await generateNewToken(_user)
        console.log('token', token)
        new_user.token = token;
        return res.status(200).send({ data: new_user, message: 'User Registered!' })
    }
    catch(err){
        return res.status(500).send({ message: err});
    }
}

export const searchUser = async(req, res) => {
    try{
        const userFound = await userService.getUser(req.params.name)
        if(userFound){
            return res.status(200).send({ data: userFound })
        }
    }
    catch(err){
        return res.status(500).send({ message: err});
    }
}