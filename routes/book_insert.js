const express = require('express');
const mysql = require('mysql');
const database = require('../database');
const connection = mysql.createConnection(database);

const router = express.Router();

// /insert/ 페이지를 렌더링합니다.
router.get('/', (req, res, next) => {
    res.render('book_insert', {
        title: "개인 도서 관리 시스템 : 책 추가"
    });
});

// POST 요청을 처리합니다.
router.post('/', (req, res, next) => {
    const { title, author, date, content } = req.body;
  
    // SQL 쿼리문을 사용하여 데이터를 삽입합니다.
    // 주의: 사용자 입력 데이터를 그대로 사용하는 것은 SQL Injection 공격에 취약하므로, 매개변수화된 쿼리를 사용해야 합니다.
    const query = 'INSERT INTO test_user (book_name, book_author, book_date, book_content) VALUES (?, ?, ?, ?)';
    connection.query(query, [title, author, date, content], (error, results, fields) => {
        if (error) {
            console.error("데이터베이스 쿼리 중 오류 발생:", error);
            res.status(500).send('서버 오류');
            return;
        }
        res.redirect('/insert'); // 성공 시, 메인 페이지나 다른 페이지로 리다이렉트할 수 있습니다.
    });

});


module.exports = router;