import { useContext } from "react";
import { CardContext } from "../Payments";
import Title from "../components/Title";
import Button from "../components/Button";
import CompletedCard from "../components/CompletedCard";

function CompleteCard() {
  const { cards } = useContext(CardContext);

  const completedCard = cards[cards.length - 1];

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <Title marginBottom="2.5rem">카드등록이 완료되었습니다.</Title>
        </div>
        <CompletedCard completedCard={completedCard} />
        <div className="input-container flex-center w-100">
          <input
            className="input-underline w-75"
            type="text"
            placeholder="카드의 별칭을 입력해주세요."
          />
        </div>
        <Button marginTop="11.5rem">다음</Button>
      </div>
    </div>
  );
}

export default CompleteCard;
