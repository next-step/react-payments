import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CardContext } from "../context/CardContext";
import { ROUTE_PATH } from "../constants/page";
import Header from "../components/Header";

// TODO : 컴포넌트로 분리
export default function CardRegistrationCompletedPage() {
  const { cardInfo, setCardInfo } = useContext(CardContext);

  const navigate = useNavigate();
  const nickNameRef = useRef(""); // TODO : 초기값 카드사

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <Header className="page-title mb-10">카드등록이 완료되었습니다.</Header>
      </div>
      <div className="card-box">
        <div className="big-card">
          <div className="card-top">
            <span className="card-text__big">클린카드</span>
          </div>
          <div className="card-middle">
            <div className="big-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text__big">
                {cardInfo["cardNumber"]["num0"]} -{" "}
                {cardInfo["cardNumber"]["num1"]} -{" "}
                {cardInfo["cardNumber"]["num2"]} -{" "}
                {cardInfo["cardNumber"]["num3"]}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text__big">
                {cardInfo["cardOwnerName"]}
              </span>
              <span className="card-text__big">
                {cardInfo["cardExpiration"]["month"]} /{" "}
                {cardInfo["cardExpiration"]["year"]}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          ref={nickNameRef}
          placeholder="카드의 별칭을 입력해주세요."
        />
      </div>
      <div className="button-box mt-30">
        <button
          className="button-text"
          onClick={() => {
            setCardInfo({
              ...cardInfo,
              ["cardNickName"]: nickNameRef.current?.value,
            });
            //console.log(cardInfo); // TODO : 실시간 Nickname이 반영되지 않는 이유
            navigate(ROUTE_PATH.REGISTED_CARD_LIST);
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
}
