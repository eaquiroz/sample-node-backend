const env = process.env.NODE_ENV || 'development';

const dotenv = require('dotenv');
const envFound = dotenv.config();

if (!envFound) {
    throw new Error("Couldn't find .env file .️");
}

const development = {
    db: {
        host: process.env.host || 'localhost',
        port: 27017,
        database: process.env.database || 'eddie-walmart',
        username: process.env.dbUser || '',
        password: process.env.dbPassword || ''
    }
};

const config = {
    development
};

module.exports = config[env];
