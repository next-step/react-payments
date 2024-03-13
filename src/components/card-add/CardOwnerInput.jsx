import { CARD_OWNER_NAME_MAX_LENGTH } from "../../constants/cardOwnerName";
import { useCardState } from "../../hook/useCardState";
import Input from "../atomic-design-pattern/atom/Input";

export default function CardOwnerNameInput() {
  const { cardState, setCardState } = useCardState();

  const onChangeCardOwnerName = (event) => {
    const { value } = event.target;

    setCardState((prev) => {
      return { ...prev, cardOwnerName: value };
    });
  };

  return (
    <Input
      value={cardState.cardOwnerName}
      onChange={onChangeCardOwnerName}
      type="text"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      maxLength={CARD_OWNER_NAME_MAX_LENGTH}
    />
  );
}
