const mongoose = require('mongoose')

const Messages = new mongoose.Schema(
    {
        sender_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users'
        },
        receiver_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users'
        },
        roomId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'chat_rooms'
        },
        text:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

mongoose.model('messages', Messages)