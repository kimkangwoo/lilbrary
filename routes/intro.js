// routes/intro.js 파일
// 소개 페이지 기능 구현
const express = require('express');

const router = express.Router();

// //
router.get('/', (req, res, next) => {
    res.render('intro', {
        title : "개인 도서 관리 시스템 : 메인"
    });
});

module.exports = router;
