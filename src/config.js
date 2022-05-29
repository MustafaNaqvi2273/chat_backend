const dotenv = require('dotenv')
const db_uri = process.env.MONGODB_URL;

dotenv.config({ path: '../config.env' })

const SOCKET_PORT = 4000;

module.exports = {
    socket_port : SOCKET_PORT,
    mongodb : {
        url: db_uri,
        options: {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
        refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS
    }
}