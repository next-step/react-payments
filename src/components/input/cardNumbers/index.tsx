import { CardNumber } from "@/store/Provider";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const MAX_CARD_NUMBER_LENGTH = 4;

type CardNumbersInputProps = {
  handleChangeCardNumber: (number: CardNumber) => void;
};

const CardNumbersInput = ({ handleChangeCardNumber }: CardNumbersInputProps) => {
  const nextElement = useRef<HTMLInputElement[]>([]);
  const [numbers, setNumbers] = useState<CardNumber>(["", "", "", ""]);

  const autoFocus = (updatedCardNumbers: string[], index: number) => {
    if (updatedCardNumbers[index].length === 4) {
      if (nextElement.current[index]) {
        nextElement.current[index].focus();
      }
    }
  };

  const handleChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newCardNumber = [...numbers] as CardNumber;
      const { value } = e.target as HTMLInputElement;

      if (Number.isNaN(+value)) {
        alert("카드번호는 숫자만 입력해주세요!");
        return;
      }

      newCardNumber[index] = value;
      autoFocus(newCardNumber, index);
      setNumbers(newCardNumber);
  };

  useEffect(() => {
    handleChangeCardNumber(numbers);
    // eslint-disable-next-line
  }, [numbers]);

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          className="input-basic"
          type="text"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={numbers[0]}
          onChange={handleChange(0)}
        />
        <input
          ref={(el: HTMLInputElement) => (nextElement.current[0] = el)}
          className="input-basic"
          type="text"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={numbers[1]}
          onChange={handleChange(1)}
        />
        <input
          ref={(el: HTMLInputElement) => (nextElement.current[1] = el)}
          className="input-basic"
          type="password"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={numbers[2]}
          onChange={handleChange(2)}
        />
        <input
          ref={(el: HTMLInputElement) => (nextElement.current[2] = el)}
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
