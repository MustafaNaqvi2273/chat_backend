const mongoose = require('mongoose');
const User = require('../models/users');

export const getUserByEmail = async(email) => {
    const user = await User.findOne({ email: email })
    if(user){
        return user
    }
}

export const createUser = async(data) => {
    const newUser = await User.create(data)
    return newUser
}

export const getUser = async(name) => {
    const user = await User.find({
        $or:[
            { username: { '$regex' : name } },
            { full_name: { '$regex' : name } }
        ]
    })
    return user
}