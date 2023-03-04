import { ChangeEvent } from "react";

const MAX_CARD_OWNER_NAME_LENGTH = 30;

type CardOwnerInputProps = {
  cardOwnerName: string;
  handleCardOwner: (input: string) => void;
};

const CardOwnerInput = ({
  cardOwnerName,
  handleCardOwner,
}: CardOwnerInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleCardOwner(e.target.value);
  };

  return (
    <div className="input-container">
      <div className="input-card-name-title-box">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-title">{cardOwnerName.length} / 30</span>
      </div>
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={cardOwnerName}
        maxLength={MAX_CARD_OWNER_NAME_LENGTH}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default CardOwnerInput;
