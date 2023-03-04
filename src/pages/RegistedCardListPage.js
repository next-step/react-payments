import { useContext } from "react";

import { Link } from "react-router-dom";
import { CardContext } from "../context/CardContext";

import { ROUTE_PATH } from "../constants/page";
import Header from "../components/Header";

export default function RegistedCardListPage() {
  const { cardInfo, setCardInfo } = useContext(CardContext);

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <Header className="page-title mb-10">보유 카드</Header>
      </div>
      <div className="card-box">
        <div className="small-card">
          <div className="card-top">
            <span className="card-text">클린카드</span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">
                {cardInfo["cardNumber"]["num0"]} -{" "}
                {cardInfo["cardNumber"]["num1"]} -{" "}
                {cardInfo["cardNumber"]["num2"]} -{" "}
                {cardInfo["cardNumber"]["num3"]}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">{cardInfo["cardOwnerName"]}</span>
              <span className="card-text">
                {cardInfo["cardExpiration"]["month"]} /{" "}
                {cardInfo["cardExpiration"]["year"]}
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className="card-nickname">{cardInfo["cardNickName"]}</span>
      <Link className="button-text" to={ROUTE_PATH.CARD_REGISTRATION}>
        <div className="card-box">
          <div className="empty-card">+</div>
        </div>
      </Link>
    </div>
  );
}
