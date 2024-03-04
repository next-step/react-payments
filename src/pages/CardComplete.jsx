import CardBox from "../components/CardBox";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function CardComplete() {
  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
        </div>
        <CardBox>
          <Card />
        </CardBox>
        <div className="input-container flex-center w-100">
          <input
            className="input-underline w-75"
            type="text"
            placeholder="카드 별칭"
          />
        </div>
        <div className="button-box">
          <span className="button-text">
            <Link to={location} className="button-basic">
              다음
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
