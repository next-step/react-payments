import { CARD_PASSWORD } from "../constants/card";
import Span from "./Span";
import useCardPassword from "../hooks/useCardPassword";

export default function CardPasswordInput({cardPassword, onChange}) {
  // const dataId = useRef(0); // TODO : nextsibling auto focus & key 값 제어 (useRef)

  return (
    <div className="input-container">
      <Span className="input-title">카드 비밀번호</Span>
      {["num0","num1","num2","num3"].map((name, index) => {
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
            value={index > 1? "*" : cardPassword[name]}
            maxLength={CARD_PASSWORD.MAX_LENGTH}
            disabled={index > 1 ? true : false}
          ></input>
        );
      })}
    </div>
  );
}
