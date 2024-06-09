// routes/intro.js 파일
// 소개 페이지 기능 구현
const express = require('express');

const router = express.Router();

// //
router.get('/', (req, res, next) => {
    res.render('intro', {
        title : "libmng : 메인"
    });
});

module.exports = router;
