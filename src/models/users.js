const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Users = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password_hash:{
        type: String,
        required: true
    },
    phone: String,
    full_name: String
})

Users.methods.validatePassword = (password) => {
    return bcrypt.compareSync(password, this.password_hash)
}

mongoose.model('users', Users)