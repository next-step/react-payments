import { useContext } from "react";
import Card from "../components/Card";
import { CardContext } from "../../providers/CardState/CardStateProvider";
import { MONTH, YEAR } from "../constants/expirationDate";
import CardAliasInput from "../components/card-complete/CardAliasInput";
import Button from "../components/atomic-design-pattern/atom/Button";

export default function CardComplete({ onNext }) {
  const { cardState } = useContext(CardContext);
  const { cardNumber, expirationDate, cardOwnerName, alias } = cardState;

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
        </div>
        <Card
          alias={alias}
          cardNumber={cardNumber}
          expirationDateMM={expirationDate[MONTH]}
          expirationDateYY={expirationDate[YEAR]}
          cardOwnerName={cardOwnerName}
        />
        <CardAliasInput />

        <div className="button-box">
          <Button variant="link" onClick={onNext}>
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}
