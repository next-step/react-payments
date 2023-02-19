import { usePayments } from "../../../store/context";

const MAX_CARD_NUMBER_LENGTH = 4;

const CardNumbersInput = () => {
  const { cardNumbers, setCardNumberByIndex, nextElement } = usePayments();

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
