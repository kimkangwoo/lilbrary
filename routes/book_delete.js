const express = require('express');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const database = require('../database');

const connection = mysql.createConnection(database);
connection.connect();

const router = express.Router();
router.use(cookieParser());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    let user = "";
    if (req.cookies.user) {
        user = JSON.parse(req.cookies.user);
    }
    res.render('book_delete', {
        title: "libmng : 책 삭제",
        user: user,
    });
});

// 버튼 클릭 이벤트
router.post('/', (req, res) => {
    console.log('/delete router clicked:', req.body);

    // 책 검색 이벤트
    if (req.body.message == 'clicked search') {
        const searchQuery = req.body.myInput;
        console.log(searchQuery);
        const query = 'SELECT * FROM test_user WHERE book_name LIKE ?';
        connection.query(query, [`%${searchQuery}%`], (error, results) => {
            if (error) {
                console.error('Error searching books:', error);
                return res.status(500).send('Internal Server Error');
            }
            res.json(results);
            console.log(results);
        });
    }

    // 책 삭제 이벤트
    if (req.body.message === 'clicked delete') {
        const bookName = req.body.bookId; // 클라이언트 측과 일치시킴
        const deleteQuery = 'DELETE FROM test_user WHERE book_name = ?';
        connection.query(deleteQuery, [bookName], (error, results) => {
            if (error) {
                console.error('Error deleting book:', error);
                return res.status(500).json({ success: false, message: '삭제 실패' });
            }
            console.log('삭제된 레코드 수:', results.affectedRows);
            res.json({ success: true, message: '삭제 성공' });
        });
    }
});

module.exports = router;
