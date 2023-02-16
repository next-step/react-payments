import { useState } from "react";

const MAX_CARD_NUMBER_LENGTH = 4;

const CardNumbersInput = () => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);

  const setCardNumberByIndex = (index) => {
    console.log(index);
    //TODO: set logic here
  };

  return (
    <div class="input-container">
      <span class="input-title">카드 번호</span>
      <div class="input-box">
        <input
          class="input-basic"
          type="text"
          value={cardNumbers[0]}
          onChange={setCardNumberByIndex(0)}
          maxLength={MAX_CARD_NUMBER_LENGTH}
        />
        -
        <input
          class="input-basic"
          type="text"
          value={cardNumbers[1]}
          onChange={setCardNumberByIndex(1)}
          maxLength={MAX_CARD_NUMBER_LENGTH}
        />
        -
        <input
          class="input-basic"
          type="password"
          value={cardNumbers[2]}
          onChange={setCardNumberByIndex(2)}
          maxLength={MAX_CARD_NUMBER_LENGTH}
        />
        -
        <input
          class="input-basic"
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
