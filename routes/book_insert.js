// 서재에 책 추가 기능
// routes/book_insert.js 파일
const express = require('express');

const router = express.Router();

// /insert/
router.get('/', (req, res, next) => {
    res.render('book_insert');
});

module.exports = router;
