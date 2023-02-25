import { ChangeEvent, useEffect, useState } from "react";

const MAX_CARD_OWNER_NAME_LENGTH = 30;

type CardOwnerInputProps = {
  handleCardOwner: (input: string) => void;
};

const CardOwnerInput = ({ handleCardOwner }: CardOwnerInputProps) => {
  const [ownerName, setOwnerName] = useState<string>('');
  
  const handleCardOwnerInput = (e: ChangeEvent<HTMLInputElement>) => {
    setOwnerName(e.target.value);
  };

  useEffect(() => {
    handleCardOwner(ownerName);
    // eslint-disable-next-line
  }, [ownerName]);

  return (
    <div className="input-container">
      <div className="input-card-name-title-box">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-title">{ownerName.length} / 30</span>
      </div>
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={ownerName}
        maxLength={MAX_CARD_OWNER_NAME_LENGTH}
        onChange={handleCardOwnerInput}
      />
    </div>
  );
};

export default CardOwnerInput;
