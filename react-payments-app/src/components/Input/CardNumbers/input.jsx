import { useState } from "react";

const MAX_CARD_NUMBER_LENGTH = 4;

const CardNumbersInput = () => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);

  const setCardNumberByIndex = (index) => {
    console.log(index);
    //TODO: set logic here
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          className="input-basic"
          type="text"
          value={cardNumbers[0]}
          onChange={setCardNumberByIndex(0)}
          maxLength={MAX_CARD_NUMBER_LENGTH}
        />
        -
        <input
          className="input-basic"
          type="text"
          value={cardNumbers[1]}
          onChange={setCardNumberByIndex(1)}
          maxLength={MAX_CARD_NUMBER_LENGTH}
        />
        -
        <input
          className="input-basic"
          type="password"
          value={cardNumbers[2]}
          onChange={setCardNumberByIndex(2)}
          maxLength={MAX_CARD_NUMBER_LENGTH}
        />
        -
        <input
          className="input-basic"
          type="password"
          value={cardNumbers[3]}
          onChange={setCardNumberByIndex(3)}
          maxLength={MAX_CARD_NUMBER_LENGTH}
        />
      </div>
    </div>
  );
};

export default CardNumbersInput;
