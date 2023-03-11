import { CARD_NUMBER } from "../constants/card";

export default function CardNumberInput({
  cardNumber,
  onChange,
  cardNumberRefs,
}) {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          className="input-basic card-number"
          type="text"
          inputMode="numeric"
          name="num0"
          ref={(el) => (cardNumberRefs.current[0] = el)}
          onChange={onChange}
          value={cardNumber["num0"]}
          maxLength={CARD_NUMBER.MAX_LENGTH}
        ></input>
        {cardNumber["num0"].length === 4 && "-"}
        <input
          className="input-basic card-number"
          type="text"
          inputMode="numeric"
          name="num1"
          ref={(el) => (cardNumberRefs.current[1] = el)}
          onChange={onChange}
          value={cardNumber["num1"]}
          maxLength={CARD_NUMBER.MAX_LENGTH}
        ></input>
        {cardNumber["num1"].length === 4 && "-"}
        <input
          className="input-basic card-number"
          type="password"
          inputMode="numeric"
          name="num2"
          ref={(el) => (cardNumberRefs.current[2] = el)}
          onChange={onChange}
          value={cardNumber["num2"]}
          maxLength={CARD_NUMBER.MAX_LENGTH}
        ></input>
        {cardNumber["num2"].length === 4 && "-"}
        <input
          className="input-basic card-number"
          type="password"
          inputMode="numeric"
          name="num3"
          ref={(el) => (cardNumberRefs.current[3] = el)}
          onChange={onChange}
          value={cardNumber["num3"]}
          maxLength={CARD_NUMBER.MAX_LENGTH}
        ></input>
      </div>
    </div>
  );
}
