// routes/sign_in.js 파일
// 로그인 페이지 기능 구현
const express = require('express');

const router = express.Router();

// /sign_in/
router.get('/', (req, res, next) => {
    res.render('sign_in');
});

module.exports = router;
