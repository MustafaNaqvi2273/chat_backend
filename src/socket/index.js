const socketIO = require('socket.io')
const config = require('../config')

const io = socketIO(config.socket_port, {
    cors: {
        origin: '*'
    }
}).sockets

const socket_settings = () => {
    io.use(function(socket, next) {

    }).on('connection', (socket) => {
        const { chat_id } = socket.handshake.query
        socket.join(chat_id)

        const { room } = socket.handshake.query
        socket.join(room)

        socket.on('disconnect', () => {
            socket.leave(chat_id)
        })

        socket.on('send message', (message) => {
            const { receiver_id, sender_id, text } = message;

            socket.to(receiver_id).emit('messageReceive', {
                text,
                sender_id,
                receiver_id
            })
        })

        socket.on('send state', (data) => {
            const { room } = data
            socket.to(room).emit('receive_state', data)
        })
    })
}

module.exports = socket_settings;