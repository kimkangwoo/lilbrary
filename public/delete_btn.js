document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#delete-form');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const book = registerForm.querySelector('#book_name').value;

        try {
            const response = await fetch('/sign_up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const responseText = await response.text();

            if (response.ok) {
                console.log('회원가입 성공!');
                alert('회원가입 성공!');
                // 회원가입 성공 후의 동작 추가 (예: 로그인 페이지로 리디렉션)
                window.location.href = '/sign_in';
            } else {
                console.error('회원가입 실패:', responseText);
                alert('회원가입 실패: ' + responseText);
            }
        } catch (error) {
            console.error('에러 발생:', error);
            alert('에러 발생: ' + error.message);
        }
    });
});
