const dotenv = require('dotenv');

dotenv.config();
const password = process.env.PASSWORD; 

module.exports = {
    host : 'localhost',
    user : 'root',
    password : `${password}`,
    database : 'library',
}