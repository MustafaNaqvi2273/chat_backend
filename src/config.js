const dotenv = require('dotenv')

dotenv.config()

const SOCKET_PORT = 4000;
const db_uri = process.env.MONGODB_URL;

module.exports = {
    socket_port : SOCKET_PORT,
    mongodb : {
        url: db_uri,
        options: {
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