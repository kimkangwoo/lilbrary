const express = require('express');
const mysql = require('mysql');
const path = require('path');
const router = require('./routes')
const nunjucks = require('nunjucks');



const index = require('./routes/index');

app.set('port', 3000);
app.set("veiw engine", 'html');

nunjucks.configure('views', {
    express : app,
    watch: true
});

// route 설정 //////////////////////////////////////////////////
const app = express();

app.use('/', router)

app.listen(app.get('port'), ()=>{
    console.log('현재 서버가 실행중입니다.');
    console.log(`주소 : http://localhost:${app.get('port')}`);
});