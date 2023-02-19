import { ChangeEvent, useRef, useState } from "react";

const MAX_CARD_NUMBER_LENGTH = 4;

const CardNumbersInput = () => {
  // 이부분하고 
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  
  const nextElement = useRef<HTMLInputElement[]>([]);

  const autoFocus = (updatedCardNumbers: string[], index: number) => {
    if (updatedCardNumbers[index].length === 4) {
      if (nextElement.current[index]) {
        nextElement.current[index].focus();
      }
    }
  };

  const setCardNumberByIndex =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const updatedCardNumbers = [...cardNumbers];
      const { value } = e.target as HTMLInputElement;

      if (Number.isNaN(+value)) {
        alert("카드번호는 숫자만 입력해주세요!");
        return;
      }

      updatedCardNumbers[index] = value;
      autoFocus(updatedCardNumbers, index);

      // 이부분만
      setCardNumbers(updatedCardNumbers);
    };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          className="input-basic"
          type="text"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[0]}
          onChange={setCardNumberByIndex(0)}
        />
        <input
          ref={(el: HTMLInputElement) => (nextElement.current[0] = el)}
          className="input-basic"
          type="text"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[1]}
          onChange={setCardNumberByIndex(1)}
        />
        <input
          ref={(el: HTMLInputElement) => (nextElement.current[1] = el)}
          className="input-basic"
          type="password"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[2]}
          onChange={setCardNumberByIndex(2)}
        />
        <input
          ref={(el: HTMLInputElement) => (nextElement.current[2] = el)}
          className="input-basic"
          type="password"
          maxLength={MAX_CARD_NUMBER_LENGTH}
          value={cardNumbers[3]}
          onChange={setCardNumberByIndex(3)}
        />
      </div>
    </div>
  );
};

export default CardNumbersInput;
