import { CARD_NUMBER } from "../constants/card";

// TODO : nextsibling auto focus
export default function CardNumberInput({cardNumber, onChange}) {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {["num0", "num1", "num2", "num3"].map((name, index) => {
          return (
            <input
              className="input-basic card-number"
              type={(index < 2)? "text" : "password"}
              name={name}
              key={index}
              onChange={onChange}
              value={cardNumber[name]}
              maxLength={CARD_NUMBER.MAX_LENGTH}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
