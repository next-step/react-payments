import { CARD_PASSWORD } from "../constants/card";

const cardPasswordArray = ["num0", "num1", "num2", "num3"];

export default function CardPasswordInput({
  cardPassword,
  onChange,
  PasswordRefs,
}) {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      {cardPasswordArray.map((name, index) => {
        return (
          <input
            className={
              "input-basic w-15 card-password" +
              (index > 1 ? " input-disabled" : "")
            }
            type="password"
            name={name}
            ref={(el) => (PasswordRefs.current[index] = el)}
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
