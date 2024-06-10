// routes/m2.js 파일
// 문의 기능 구현
const express = require('express');
const cookieParser = require('cookie-parser');

const router = express.Router();
router.use(cookieParser());

// //
router.get('/', (req, res, next) => {
    if(req.cookies.user){
        user =  JSON.parse(req.cookies.user);
    }else{
        user ="";
    }
    res.render('m2', {
        title : "libmng : 문의"
        ,user : user,
    });
});

module.exports = router;
