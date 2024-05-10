const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport');
const db = require('./Database');
const mysql = require('mysql');

dotenv.config();
const port = process.env.PORT;

const app = express();

const connection = mysql.createConnection(db)
connection.connect();


app.get('/', function(req, res){
    res.send("hello world");
});
app.get('/db', function(req, res){
    connection.query("SELECT * FROM book;", function(err, row, fields){
        if (err) throw err;
        else{
            res.send(row);
        }
    })
});


app.listen(port, function(){
    console.log(`server is running : http://localhost:${port}`);
});