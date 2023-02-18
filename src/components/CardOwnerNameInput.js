import { CARD_OWNER_NAME } from "../constants/card";
import Span from "./Span";
import useCardOwnerName from "../hooks/useCardOwnerName";

// TODO : inputValue 상태명이 명시적인가?
// TODO : 유효성 검사 함수명이 너무 비슷하진 않은지
// TODO : 현재 입력 자릿수와 최대 입력 자릿수 위치 조정
// TODO : state를 컴포넌트 내부로 가져와도 되나? 의미가 있는걸까?
export default function CardOwnerNameInput() {
  const [inputValue, onChange] = useCardOwnerName();

  return (
    <div className="input-container">
      <Span className="input-title">
        카드 소유자 이름(선택)
        {"    "}
        {inputValue.length} {" / "}
        {CARD_OWNER_NAME.MAX_LENGTH}
      </Span>
      <input
        className="input-basic card-owner-name"
        type="text"
        placeholder={CARD_OWNER_NAME.PLACEHOLDER}
        onChange={onChange}
        defaultValue={inputValue}
        maxLength={CARD_OWNER_NAME.MAX_LENGTH}
      ></input>
    </div>
  );
}
