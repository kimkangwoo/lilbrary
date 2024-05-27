// routes/book_delete.js 파일
// 서재에 책 삭제 기능
const express = require('express');

const router = express.Router();

// /delete/
router.get('/', (req, res, next) => {
    res.render('book_delete', {
        title : "개인 도서 관리 시스템 : 책 삭제"
    });
});

module.exports = router;
