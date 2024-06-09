// routes/sign_in.js 파일
// 로그인 페이지 기능 구현
const express = require('express');
const db = require('../database')
const mysql = require('mysql');

const connection = mysql.createConnection(db);
connection.connect();

const router = express.Router();

// /sign_in/
router.get('/', (req, res, next) => {
    res.render('sign_in', {
        title : "libmng : 로그인"
    });
});

router.post('/', function(req, res) {
    const { email, password } = req.body;
    console.log('로그인 시도:', email, password); // 디버깅 로그 추가

    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(err, results) {
        if (err) {
            console.error('로그인 실패:', err);
            res.status(500).send('로그인에 실패했습니다.');
        } else {
            if (results.length > 0) {
                console.log('로그인 성공:', results);
                
                // 사용자 인증이 성공하면 클라이언트에게 쿠키를 설정하여 로그인 상태를 유지합니다.
                res.cookie('user', JSON.stringify(results[0]));
                
                // 로그인 성공 메시지를 클라이언트에게 전송합니다.
                res.status(200).send('로그인 성공!');
            } else {
                console.log('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.');
                
                // 로그인 실패 메시지를 클라이언트에게 전송합니다.
                res.status(401).send('아이디 또는 비밀번호가 잘못되었습니다.');
            }
        }
    });
});

module.exports = router;
