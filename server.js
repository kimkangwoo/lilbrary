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

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch : true,
});

app.get('/', function(req, res){
    console.log("main 페이지 요청...");
    res.send("페이지 표시 성공");
});
app.get('/db', function(req, res){
    connection.query("SELECT * FROM book;", function(err, row, fields){
        if (err) throw err;
        else{
            console.log("데이터베이스 연결에 성공했습니다.");
            res.send(row);
        }
    })
});


app.listen(port, function(){
    console.log(`server is running : http://localhost:${port}`);
});