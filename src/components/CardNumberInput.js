import { CARD_NUMBER } from "../constants/card";

// TODO : nextsibling auto focus
// TODO : 함수컴포넌트는 함수를 호출함으로써 렌더가 이뤄지게 되는데, 배열과같은 레퍼런스타입의 값들은 매번 새로운 주소값을 가짐
// 레퍼런스 유지 방법 : 컴포넌트 밖에 배치해 함수컴포넌트가 호출될때 새롭게 배열을 만드는 것을 막거나 컴포넌트 내부에서 useMemo를 사용
export default function CardNumberInput({ cardNumber, onChange }) {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {["num0", "num1", "num2", "num3"].map((name, index) => {
          return (
            <input
              className="input-basic card-number"
              type={index < 2 ? "text" : "password"}
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
