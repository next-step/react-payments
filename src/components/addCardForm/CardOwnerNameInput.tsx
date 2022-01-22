import { MaxLength } from "@common/constants";
import { IUseInputState } from "@hooks/useInput";

interface CardOwnerNameInputProps {
  ownerNameInputState: IUseInputState;
}
const CardOwnerNameInput = ({
  ownerNameInputState,
}: CardOwnerNameInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">
        카드 소유자 이름(선택) (현재 입력 자릿수:{" "}
        {ownerNameInputState.value.length}, 최대 입력 자릿수:{" "}
        {MaxLength.OwnerNameInput})
      </span>
      <input
        type="text"
        className="input-basic"
        maxLength={MaxLength.OwnerNameInput}
        value={ownerNameInputState.value}
        onChange={ownerNameInputState.onChange}
      />
    </div>
  );
};

export default CardOwnerNameInput;
