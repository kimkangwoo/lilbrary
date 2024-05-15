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

// cookie-parser 미들웨어 사용
app.use(cookieParser(dotenv.COOKIE_NAME));

app.get('/', function(req, res){
    console.log("main 페이지 요청...");

  // 쿠키는 req.cookies 객체를 통해 읽을 수 있습니다.
  console.log('요청된 쿠키:', req.cookies);
  res.cookie('greeting', '741545465');
  // 클라이언트에 응답을 보낼 수도 있습니다.
  res.send('쿠키를 확인했습니다.');
});

app.get('/design', function(req, res){
    res.render('main');
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