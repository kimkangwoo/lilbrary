// routes/book_delete.js 파일
// 서재에 책 삭제 기능
const express = require('express');

const router = express.Router();

// /delete/
router.get('/', (req, res, next) => {
    res.render('book_delete');
});

module.exports = router;
