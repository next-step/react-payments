import Card from "../components/atomic-design-pattern/molecule/Card";
import CardBox from "../components/CardBox";
import { getLocalStorageKeyByCardNumber } from "../util/cardStorage";
import { MONTH, YEAR } from "../constants/expirationDate";
import { useContext } from "react";
import { CardContext } from "../../providers/CardState/CardStateProvider";

export default function CardList({
  goToAddPage,
  goToCompletePage,
  cardInfoList,
}) {
  const { setCardState } = useContext(CardContext);

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
              alias={alias}
              cardNumber={cardNumber}
              expirationDateMM={expirationDate[MONTH]}
              expirationDateYY={expirationDate[YEAR]}
              cardOwnerName={cardOwnerName}
              key={getLocalStorageKeyByCardNumber(cardNumber)}
              onClick={() => onClickCard(cardInfo)}
            />
          );
        })}
        <div className="button-basic" onClick={goToAddPage}>
          <CardBox>+</CardBox>
        </div>
      </div>
    </div>
  );
}
