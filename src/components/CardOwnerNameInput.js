import { CARD_OWNER_NAME } from "../constants/card";
import Span from "./Span";

// TODO : 현재 입력 자릿수와 최대 입력 자릿수 위치 조정
export default function CardOwnerNameInput({cardOwnerName, onChange}) {
  return (
    <div className="input-container">
      <Span className="input-title">
        카드 소유자 이름(선택)
        {"    "}
        {cardOwnerName.length} {" / "}
        {CARD_OWNER_NAME.MAX_LENGTH}
      </Span>
      <input
        className="input-basic card-owner-name"
        type="text"
        placeholder={CARD_OWNER_NAME.PLACEHOLDER}
        onChange={onChange}
        value={cardOwnerName}
        maxLength={CARD_OWNER_NAME.MAX_LENGTH}
      ></input>
    </div>
  );
}
