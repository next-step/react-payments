import { useInputFocus, useRefs } from "hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { CardNumber } from "store/Provider";

const MAX_CARD_NUMBER_LENGTH = 4;

type CardNumbersInputProps = {
  handleChangeCardNumber: (number: CardNumber) => void;
};

const CardNumbersInput = ({
  handleChangeCardNumber,
}: CardNumbersInputProps) => {
  const [numbers, setNumbers] = useState<CardNumber>(["", "", "", ""]);
  const numberRefs = useRefs<HTMLInputElement>(MAX_CARD_NUMBER_LENGTH);

  useInputFocus({
    refs: numberRefs,
    deps: numbers,
    maxLength: MAX_CARD_NUMBER_LENGTH,
  });

  const handleChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newCardNumber = [...numbers] as CardNumber;
      const { value } = e.target as HTMLInputElement;

      if (Number.isNaN(+value)) {
        alert("카드번호는 숫자만 입력해주세요!");
        return;
      }

      newCardNumber[index] = value;
      setNumbers(newCardNumber);
    };

  useEffect(() => {
    handleChangeCardNumber(numbers);
  }, [numbers, handleChangeCardNumber]);

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          ref={numberRefs[0]}
          className="input-basic"
          type="text"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={numbers[0]}
          onChange={handleChange(0)}
        />
        <input
          ref={numberRefs[1]}
          className="input-basic"
          type="text"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={numbers[1]}
          onChange={handleChange(1)}
        />
        <input
          ref={numberRefs[2]}
          className="input-basic"
          type="password"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={numbers[2]}
          onChange={handleChange(2)}
        />
        <input
          ref={numberRefs[3]}
          className="input-basic"
          type="password"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={numbers[3]}
          onChange={handleChange(3)}
        />
      </div>
    </div>
  );
};

export default CardNumbersInput;
