import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext";

import { ROUTE_PATH } from "../constants/page";
import Header from "../components/Header";
import CardBox from "../components/CardBox";

export default function RegistedCardListPage() {
  const { cardInfo, setCardInfo } = useContext(CardContext);
  const navigate = useNavigate();

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <Header className="page-title mb-10">보유 카드</Header>
      </div>
      <CardBox
        cardNumber={cardInfo["cardNumber"]}
        cardExpiration={cardInfo["cardExpiration"]}
        cardOwnerName={cardInfo["cardOwnerName"]}
        cardColor={cardInfo["cardColor"]}
        cardCompanyName={cardInfo["cardCompanyName"]}
        cardSize="small"
        onClick={() => {
          navigate(ROUTE_PATH.CARD_REGISTRATION_COMPLETED);
        }}
      />
      <span className="card-nickname">{cardInfo["cardNickName"]}</span>
      <Link className="button-text" to={ROUTE_PATH.CARD_REGISTRATION}>
        <div className="card-box">
          <div className="empty-card">+</div>
        </div>
      </Link>
    </div>
  );
}
