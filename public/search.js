document.getElementById('search').addEventListener('click', async () => {
    try {
        const searchInput = document.getElementById('myInput').value;
        const response = await fetch('/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'clicked search', myInput: searchInput })
        });

        const results = await response.json();
        console.log('서버 응답:', results);

        // 검색 결과를 동적으로 표시하는 로직 추가
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // 이전 검색 결과를 지웁니다.
        results.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.innerHTML = `
                <div id="myDiv">
                    <div id="imgdiv">이미지</div>
                    <div id="word">
                        <li id="magin">제목 : ${book.book_name}</li>
                        <li id="magin">저자 : ${book.book_author}</li>
                        <li id="magin">출간연도 : ${book.book_date}</li>
                        <div id="magi">
                            <li id="box">내용 : ${book.book_content}</li>
                        </div>
                        <button onclick="deleteBook('${book.book_name}')">책 삭제하기</button> <!-- 문자열로 전달 -->
                    </div>
                </div>`;
            resultsDiv.appendChild(bookDiv);
        });
    } catch (error) {
        console.error('에러 발생:', error);
    }
});

async function deleteBook(bookId) {
    try {
        const response = await fetch('/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'clicked delete', bookId: bookId }) // bookId로 변경
        });

        const result = await response.json();
        console.log('서버 응답:', result);
        // 성공적으로 삭제된 후, 사용자에게 피드백을 제공하거나 페이지를 새로 고침할 수 있습니다.
        if (result.success) {
            alert('책이 성공적으로 삭제되었습니다.');
            window.location.reload();
        }
    } catch (error) {
        console.error('에러 발생:', error);
    }
}
