const MAX_CARD_NUMBER_LENGTH = 4;

type CardNumbersInputProps = {
  cardNumbers: string[];
  onChange: (
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextElement: {
    current: HTMLInputElement[];
  };
};

const CardNumbersInput = ({
  cardNumbers,
  onChange,
  nextElement,
}: CardNumbersInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          className="input-basic"
          type="text"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[0]}
          onChange={onChange(0)}
        />
        <input
          ref={(el: HTMLInputElement) => (nextElement.current[0] = el)}
          className="input-basic"
          type="text"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[1]}
          onChange={onChange(1)}
        />
        <input
          ref={(el: HTMLInputElement) => (nextElement.current[1] = el)}
          className="input-basic"
          type="password"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[2]}
          onChange={onChange(2)}
        />
        <input
          ref={(el: HTMLInputElement) => (nextElement.current[2] = el)}
          className="input-basic"
          type="password"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[3]}
          onChange={onChange(3)}
        />
      </div>
    </div>
  );
};

export default CardNumbersInput;
