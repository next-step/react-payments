import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>React Clean Code Payments CSS example</h1>
      <h2>카드 추가 페이지 라우팅</h2>
      <div>
        <Link to="/add">카드 추가</Link> (작업중)
        <br />
        <Link to="/add-completed">카드 추가 완료</Link> (시작전)
        <br />
        <Link to="/card-list">카드 목록</Link> (시작전)
      </div>
    </>
  );
}

export default App;
