import Card from "../components/Card";
import CardBox from "../components/CardBox";
import {
  CardStorage,
  getLocalStorageKeyByCardNumber,
} from "../util/cardStorage";
import { MONTH, YEAR } from "../constants/expirationDate";

export default function CardList({ onNext }) {
  const cardInfoList = CardStorage.getCardInfoList();
  console.log(cardInfoList);
  return (
    <div>
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        {cardInfoList.map(
          ({ cardNumber, expirationDate, cardOwnerName, alias }) => {
            return (
              <Card
                key={getLocalStorageKeyByCardNumber(cardNumber)}
                cardNumber={cardNumber}
                expirationDateMM={expirationDate[MONTH]}
                expirationDateYY={expirationDate[YEAR]}
                cardOwnerName={cardOwnerName}
                alias={alias}
              />
            );
          }
        )}
        <div className="button-basic" onClick={onNext}>
          <CardBox>+</CardBox>
        </div>
      </div>
    </div>
  );
}
