import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext";
import { CardListContext } from "../context/CardListContext";

import { ROUTE_PATH } from "../constants/page";
import Header from "../components/Header";
import CardBox from "../components/CardBox";

export default function RegistedCardListPage() {
  const { cardInfo, setCardInfo } = useContext(CardContext);
  const { cardList, setCardList } = useContext(CardListContext);
  const navigate = useNavigate();

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <Header className="page-title mb-10">보유 카드</Header>
      </div>
      {cardList.map((cardInfo, index) => {
        return (
          <>
            <CardBox
              cardInfo={cardInfo}
              cardSize="small"
              key={index}
              onClick={() => {
                // TODO : isEdit 구분자 필요한지? 카드가 계속 추가되는 버그
                navigate(ROUTE_PATH.CARD_REGISTRATION_COMPLETED);
              }}
            />
            <span className="card-nickname">{cardInfo["cardNickName"]}</span>
            <button
              className="button-delete"
              type="button"
              // onClick={(e) => console.log(e.target.parentElement)}
              // onClick={setCardList(
              //   cardList.filter((cardInfo) => cardInfo[index] !== index)
              // )}
            >
              삭제
            </button>
          </>
        );
      })}

      <Link className="button-text" to={ROUTE_PATH.CARD_REGISTRATION}>
        <div className="card-box">
          <div className="empty-card">+</div>
        </div>
      </Link>
    </div>
  );
}
