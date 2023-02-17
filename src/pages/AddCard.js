import { Link } from "react-router-dom";
import CardBox from "../components/CardBox";
import CardInfoForm from "../components/CardInfoForm";
import PageTitle from "../components/PageTitle";

// TODO : 실시간 state 갱신이 되는 제어 컴포넌트처럼 동작하려면 CardBox가 CardInfoForm 하위에 있어야하나?
// TODO : submit으로 상위 form에 값을 전달해야하는걸까? React 컴포넌트는 어떻게 동작해야 하지?

export default function AddCard() {
  return (
    <>
      <PageTitle className="page-title">
        <Link className="button-text" to={`/AddedCardList`}>
          &lt;
        </Link>
        <span className="button-text">카드 추가</span>
      </PageTitle>
      <CardBox className="empty-card" />
      <CardInfoForm />
      <Link className="button-text" to={`/AddedCard`}>
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </Link>
    </>
  );
}
