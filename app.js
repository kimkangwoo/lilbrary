const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

// 라우터 가져오기
const intro_router = require('./routes/intro');
const library_router = require('./routes/library');
const book_insert_router = require('./routes/book_insert');
const book_delete_router = require('./routes/book_delete');
const sign_in_router = require('./routes/sign_in');
const sign_up_router = require('./routes/sign_up');

const app = express();

// 포트 설정
app.set('port', 3000);

// 템플릿 엔진을 'html'로 설정 (Nunjucks가 처리)
app.set('view engine', 'html');

// Nunjucks 설정
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});

// 라우터 정의
app.use('/', intro_router); // 소개 페이지에 대한 라우터
app.use('/library', library_router); // 도서관 페이지에 대한 라우터
app.use('/insert', book_insert_router); // 책 추가에 대한 라우터
app.use('/delete', book_delete_router); // 책 삭제에 대한 라우터
app.use('/sign_in', sign_in_router); // 로그인에 대한 라우터
app.use('/sign_up', sign_up_router); // 회원가입에 대한 라우터

// 404 에러 처리
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error); // 에러를 다음 미들웨어로 전달
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err); // 에러를 콘솔에 기록
    res.locals.message = err.message; // 응답 로컬 변수에 에러 메시지 설정
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; // 비생산 환경에서만 에러 세부사항 표시
    res.status(err.status || 500); // 상태 코드를 설정
    res.send(err); // 에러 응답을 보냄
});

module.exports = app; // `app` 객체를 모듈로 내보냄
