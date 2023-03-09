import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { CardContext } from "../context/CardContext";
import { CardListContext } from "../context/CardListContext";
import { ROUTE_PATH } from "../constants/page";
import Header from "../components/Header";
import CardBox from "../components/CardBox";

export default function CardRegistrationCompletedPage() {
  const { cardInfo, setCardInfo } = useContext(CardContext);
  const { cardList, setCardList } = useContext(CardListContext);

  const navigate = useNavigate();
  const nickNameRef = useRef("");

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <Header className="page-title mb-10">카드등록이 완료되었습니다.</Header>
      </div>
      <CardBox cardInfo={cardInfo} cardSize="big" />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          ref={nickNameRef}
          placeholder="카드의 별칭을 입력해주세요."
          maxLength="10"
        />
      </div>
      <div className="button-box mt-30">
        <button
          className="button-text"
          onClick={() => {
            const nicknameValue = nickNameRef.current?.value
              ? nickNameRef.current?.value
              : cardInfo["cardCompanyName"];

            setCardInfo({
              ...cardInfo,
              ["cardNickName"]: nicknameValue,
            });
            // TODO : edit 상태인 경우 카드 리스트 갱신하지 않도록 해야함
            setCardList((cardList) => [...cardList, cardInfo]);
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
