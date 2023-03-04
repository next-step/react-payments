import { useInputFocus, useRefs } from "hooks";
import { ChangeEvent } from "react";
import { CardNumber } from "store/type";

const MAX_CARD_NUMBER_LENGTH = 4;

type CardNumbersInputProps = {
  cardNumbers: CardNumber;
  handleChangeCardNumber: (number: CardNumber) => void;
};

const CardNumbersInput = ({
  cardNumbers,
  handleChangeCardNumber,
}: CardNumbersInputProps) => {
  const numberRefs = useRefs<HTMLInputElement>(MAX_CARD_NUMBER_LENGTH);

  useInputFocus({
    refs: numberRefs,
    deps: cardNumbers,
    maxLength: MAX_CARD_NUMBER_LENGTH,
  });

  const handleChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newCardNumber = [...cardNumbers] as CardNumber;
      const { value } = e.target as HTMLInputElement;

      if (Number.isNaN(+value)) {
        alert("카드번호는 숫자만 입력해주세요!");
        return;
      }

      newCardNumber[index] = value;
      handleChangeCardNumber(newCardNumber);
    };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          ref={numberRefs[0]}
          className="input-basic"
          type="text"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[0]}
          onChange={handleChange(0)}
          required
        />
        <input
          ref={numberRefs[1]}
          className="input-basic"
          type="text"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[1]}
          onChange={handleChange(1)}
          required
        />
        <input
          ref={numberRefs[2]}
          className="input-basic"
          type="password"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[2]}
          onChange={handleChange(2)}
          required
        />
        <input
          ref={numberRefs[3]}
          className="input-basic"
          type="password"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[3]}
          onChange={handleChange(3)}
          required
        />
      </div>
    </div>
  );
};

export default CardNumbersInput;
