import CardBox from "./components/CardBox";

import CardInfoForm from "./components/CardInfoForm";
import PageTitle from "./components/PageTitle";

import "./styles/index.css";

// TODO : 꺾쇠 링크버튼 나타내기
// TODO : Span도 컴포넌트화 하는게 의미가 있을까?
// TODO : 라우팅

function App() {
  return (
    <div className="app">
      <PageTitle className="page-title">카드 추가</PageTitle>
      <CardBox className="empty-card" />
      <CardInfoForm />
    </div>
  );
}

export default App;
