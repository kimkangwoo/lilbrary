document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = loginForm.querySelector('#email').value;
        const password = loginForm.querySelector('#password').value;

        try {
            const response = await fetch('/sign_in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const responseText = await response.text();

            if (response.ok) {
                console.log('로그인 성공!');
                alert('로그인 성공!');
                // 여기에 로그인 성공 후의 동작 추가
                window.location.href = '/'; // 메인 페이지로 이동
            } else {
                console.error('로그인 실패:', responseText);
                alert('로그인 실패: ' + responseText);
                // 여기에 로그인 실패 후의 동작 추가
            }
        } catch (error) {
            console.error('에러 발생:', error);
            alert('에러 발생: ' + error.message);
            // 여기에 에러 처리 동작 추가
        }
    });
});
