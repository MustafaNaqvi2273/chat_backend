const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const http = require('http')
const config = require('./src/config');
const routes = require('./src/routes/index');
const socket_settings = require('./src/socket/index');

const app = express()

const server = http.createServer(app)

app.use(cors())
app.use(routes)

console.log('config', config)

mongoose.connect(config.mongodb.url, config.mongodb.options).then(() => {
    console.log('connected to DB')
    server.listen(process.env.PORT || 5000, () => {
        console.log('server listening at PORT 5000')
        socket_settings()
        console.log(`Socket started at PORT ${config.socket_port}`)
    })
})

const unexpectedErrorHandler = (error) => {
    console.log('error', error);
    process.exit(1)
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
