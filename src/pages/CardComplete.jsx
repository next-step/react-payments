import { useContext } from "react";
import Card from "../components/atomic-design-pattern/molecule/Card";
import { CardContext } from "../../providers/CardState/CardStateProvider";
import { MONTH, YEAR } from "../constants/expirationDate";
import Input from "../components/atomic-design-pattern/atom/Input";
import Button from "../components/atomic-design-pattern/atom/Button";

export default function CardComplete({
  goToListPage,
  cardInfoList,
  setCardInfoList,
}) {
  const { cardState } = useContext(CardContext);
  const { cardNumber, expirationDate, cardOwnerName, alias } = cardState;

  const onSubmitCardComplete = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const alias = formData.get("alias");

    if (alias) {
      const index = cardInfoList.findIndex((cardInfo) => {
        return (
          Object.values(cardInfo.cardNumber).join("_") ===
          Object.values(cardNumber).join("_")
        );
      });

      if (index !== -1) {
        const newCardInfoList = [...cardInfoList];
        newCardInfoList[index].alias = alias;
        setCardInfoList(newCardInfoList);
        goToListPage();
      }
    }
  };

  return (
    <form onSubmit={onSubmitCardComplete} className="flex-column-center">
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
      <Input
        className="input-underline w-75"
        placeholder="카드 별칭 (선택)"
        maxLength={10}
        type="text"
        name="alias"
      />

      <div className="button-box">
        <Button variant="link" type="submit">
          다음
        </Button>
      </div>
    </form>
  );
}
