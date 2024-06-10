// routes/checkLogin.js 파일
// 전역 로그인 기능 구현
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(cookieParser());

// 사용자 정보를 전역으로 설정
router.use((req, res, next) => {
    res.locals.user = req.cookies.user ? JSON.parse(req.cookies.user) : null; // 쿠키에 저장된 사용자 정보를 전역 변수에 설정
    next();
});

// checkLogin 엔드포인트 추가
router.get('/', (req, res) => {
    const userCookie = req.cookies.user;

    if (userCookie) {
        // 쿠키에 사용자 정보가 있는 경우, 사용자는 로그인되어 있음
        res.sendStatus(200);
    } else {
        // 쿠키에 사용자 정보가 없는 경우, 로그인이 필요함
        res.sendStatus(401);
    }
});

module.exports = router;
