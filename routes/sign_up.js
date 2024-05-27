// 회원가입 기능 구현
// routes/sign_up.js 파일
const express = require('express');

const router = express.Router();

// /sign_up/
router.get('/', (req, res, next) => {
    res.render('sign_up');
});

module.exports = router;
