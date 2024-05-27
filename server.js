const app = require('./app');

app.listen(app.get('port'), ()=>{
    console.log(`현재 서버는 ${app.get('port')}번에서 실행중 입니다.`);
    console.log(`주소 : http://localhost:${app.get('port')}`);
})