const dotenv = require('dotenv');

dotenv.config();
const password = process.env.DB_PASSWORD; 
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;

module.exports = {
    host : `${host}`,
    user : `${user}`,
    password : `${password}`,
    database : `${database}`,
}