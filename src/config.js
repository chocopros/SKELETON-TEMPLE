//? Dependencies
require('dotenv').config();

const config = {
    port: process.env.PORT || 8000,
    nodeEnv: process.env.NODE_ENV || 'development',
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'jA27511*',
        name: process.env.DB_NAME
    }
};

module.exports = config