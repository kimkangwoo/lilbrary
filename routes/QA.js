// routes/QA.js 파일
// 질의 기능 구현
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
    res.render('QA', {
        title : "libmng : 질의"
        ,user : user,
        });
});

module.exports = router;
