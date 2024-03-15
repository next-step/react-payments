import Card from "../components/Card";
import CardBox from "../components/CardBox";
import {
  CardStorage,
  getLocalStorageKeyByCardNumber,
} from "../util/cardStorage";
import { MONTH, YEAR } from "../constants/expirationDate";
import { useContext } from "react";
import { CardContext } from "../../providers/CardState/CardStateProvider";

export default function CardList({ onNext, goToCompletePage }) {
  const { setCardState } = useContext(CardContext);
  const cardInfoList = CardStorage.getCardInfoList();
  const onClickCard = (cardInfo) => {
    setCardState(cardInfo);
    goToCompletePage();
  };
  return (
    <div>
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        {cardInfoList.map((cardInfo) => {
          const { cardNumber, expirationDate, cardOwnerName, alias } = cardInfo;
          return (
            <Card
              onClick={() => onClickCard(cardInfo)}
              key={getLocalStorageKeyByCardNumber(cardNumber)}
              cardNumber={cardNumber}
              expirationDateMM={expirationDate[MONTH]}
              expirationDateYY={expirationDate[YEAR]}
              cardOwnerName={cardOwnerName}
              alias={alias}
            />
          );
        })}
        <div className="button-basic" onClick={onNext}>
          <CardBox>+</CardBox>
        </div>
      </div>
    </div>
  );
}
