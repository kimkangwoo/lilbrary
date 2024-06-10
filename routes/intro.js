// routes/intro.js 파일
// 소개 페이지 기능 구현
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const router = express.Router();
router.use(cookieParser());

router.use(session({
    secret : 'secret',
    reseave: false,
    saveUnitialized: true
}));

router.get('/', (req, res, next) => {
    
    if(req.cookies.user){
        user =  JSON.parse(req.cookies.user);
        req.session.user = user.users_name; // cookie.user를 session.user로 저장
    }else{
        user ="";
    }
    console.log(user);

    if (req.session.user) {
        console.log(`로그인된 사용자: ${req.session.user}`);
    } else {
        console.log('로그인되지 않았습니다.');
    }


    res.render('intro', {
        title : "libmng : 메인",
        user : user,
    });
    
});

module.exports = router;