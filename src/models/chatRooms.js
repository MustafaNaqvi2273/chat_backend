const mongoose = require('mongoose')

const ChatRooms = new mongoose.Schema(
    {
        user1:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users'
        },
        user2:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users'
        },
        message: Array
    },
    {
        timestamps: true,
    }
)

mongoose.model('chat_rooms', ChatRooms)