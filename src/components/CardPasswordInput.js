import { CARD_PASSWORD } from "../constants/card";

const cardPasswordArray = ["num0", "num1", "num2", "num3"];

export default function CardPasswordInput({ cardPassword, onChange }) {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      {cardPasswordArray.map((name, index) => {
        return (
          <input
            className={
              "input-basic w-15 card-password" +
              (index > 1 ? " input-disabled" : null)
            }
            type="password"
            name={name}
            key={index}
            onChange={onChange}
            value={index > 1 ? "*" : cardPassword[name]}
            maxLength={CARD_PASSWORD.MAX_LENGTH}
            disabled={index > 1 ? true : false}
          ></input>
        );
      })}
    </div>
  );
}
