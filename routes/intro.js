// routes/intro.js 파일
// 소개 페이지 기능 구현
const express = require('express');
const cookieParser = require('cookie-parser');

const router = express.Router();
router.use(cookieParser());

router.get('/', (req, res, next) => {
    
    if(req.cookies.user){
        user =  JSON.parse(req.cookies.user);
    }else{
        user ="";
    }
    console.log(user);
    res.render('intro', {
        title : "libmng : 메인",
        user : user,
    });
    
});

module.exports = router;