import { CARD_OWNER_NAME_MAX_LENGTH } from "../../constants/cardOwnerName";

export default function CardOwnerNameInput({
  cardOwnerName,
  setCardOwnerName,
}) {
  const onChangeCardOwnerName = (event) => {
    const { value } = event.target;

    if (value.length > CARD_OWNER_NAME_MAX_LENGTH) {
      return;
    }

    setCardOwnerName(value);
  };

  return (
    <input
      value={cardOwnerName}
      onChange={onChangeCardOwnerName}
      type="text"
      className="input-basic"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
    />
  );
}
