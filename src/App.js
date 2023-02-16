import CardBox from "./components/CardBox";

import CardInfoForm from "./components/CardInfoForm";
import PageTitle from "./components/PageTitle";
import Span from "./components/Span";

import "./styles/index.css";

// TODO : 컴포넌트명 명시화
// TODO : Span도 컴포넌트화 하는게 의미가 있을까? 컴포넌트 당 한 가지 기능 단위로 생각한다면?
// TODO : 라우팅
// TODO : formatted data 제어 (구분자 포함)

function App() {
  // TODO : prevButton (Span vs. span)
  function handlePrevButtonClick() {
    console.log("prevButton clicked");
  }
  return (
    <div className="app">
      <PageTitle className="page-title">
        <span className="button-text" onClick={handlePrevButtonClick}>
          &lt;{" "}
        </span>
        카드 추가
      </PageTitle>
      <CardBox className="empty-card" />
      <CardInfoForm />
    </div>
  );
}

export default App;
