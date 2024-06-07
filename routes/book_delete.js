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

router.post(query, (req, res, next)=>{
    const { myinput } = req.body;
    const query = `DELETE FROM ${user} WHERE book_name=${myinput};`

    try{

    }catch(err){
        console.error(err);
        res.status(500).send("can't Search book");
        return res.redirect("/book");
    }
})

module.exports = router;
