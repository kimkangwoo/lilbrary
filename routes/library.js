// routes/library.js 파일
// 소개 페이지 기능 구현
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const database = require('../database');
const connection = mysql.createConnection(database);
connection.connect();

let data = {};
connection.query('SELECT * FROM test_user', (error, res, field)=>{
    if(error) throw error;
    console.log("DATABASE : /routes/database.js 연결");
    data = res;
});

// /library/
router.get('/', (req, res, next) => {
    res.render('library', {
        title : '개인 도서 관리 시스템 : 서재',
        data : data
    });
});

module.exports = router;
