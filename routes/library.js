// routes/library.js 파일
// 소개 페이지 기능 구현
const express = require('express');
const router = express.Router();
const util = require('util');
const mysql = require('mysql');
const database = require('../database');


const connection = mysql.createConnection(database);
connection.connect();

// /library/
router.get('/', async(req, res, next) => {
    if(req.cookies.user){
        user =  JSON.parse(req.cookies.user);
    }else{
        user ="";
    }
    try {
        // `util.promisify`를 사용하여 `connection.query`를 프로미스로 변환
        const query = util.promisify(connection.query).bind(connection);
        
        // 비동기적으로 데이터베이스 쿼리 실행
        const results = await query('SELECT * FROM test_user');
        console.log('library : DB 연결 성공');
        
        // 데이터베이스 조회 결과를 뷰에 전달하여 렌더링
        res.render('library', {
            title: 'libmng : 서재',
            data: results,
            user : user,
        });
    } catch (error) {
        // 에러 처리
        console.log('library : DB 연결 실패');
        next(error);
    }
});

module.exports = router;
