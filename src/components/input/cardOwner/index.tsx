type CardOwnerInputProps = {
  cardOwnerName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardOwnerInput = ({
  cardOwnerName,
  onChange,
}: CardOwnerInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 소유자 이름(선택)</span>
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={cardOwnerName}
        onChange={onChange}
      />
    </div>
  );
};

export default CardOwnerInput;
