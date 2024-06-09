// 회원가입 기능 구현
// routes/sign_up.js 파일
const express = require('express');
const db = require('../database')
const mysql = require('mysql');

const connection = mysql.createConnection(db);
connection.connect();
const router = express.Router();

// /sign_up/
router.get('/', (req, res, next) => {
    res.render('sign_up', {
        title : "libmng : 회원가입"
    });
});


router.post('/', function(req, res) {
    const { name, email, password } = req.body;

    // username을 email로 사용하거나 별도의 필드로 사용할 수 있습니다. 여기서는 email을 username으로 사용합니다.
    const username = email;

    // username 중복 체크
    connection.query('SELECT * FROM users WHERE username = ?', [username], function(err, results) {
        if (err) {
            console.error('회원가입 실패:', err);
            return res.status(500).send('회원가입에 실패했습니다.');
        }

        if (results.length > 0) {
            console.log('회원가입 실패: 이미 존재하는 username');
            return res.status(400).send('이미 존재하는 username입니다.');
        }

        // 중복되지 않으면 사용자 생성
        connection.query('INSERT INTO users (username, name, email, password) VALUES (?, ?, ?, ?)', [username, name, email, password], function(err, result) {
            if (err) {
                console.error('회원가입 실패:', err);
                return res.status(500).send('회원가입에 실패했습니다.');
            } else {
                console.log('회원가입 성공:', result);
                return res.status(200).send('회원가입이 완료되었습니다.');
            }
        });
    })
});

module.exports = router;
