import { NameRegex, MaxLength } from "@common/constants";
import useInput, { IUseInputState } from "@hooks/useInput";
import { useEffect } from "react";
import { OnChangeInputState } from "./AddCardForm";

interface CardOwnerNameInputProps {
  onChangeInputState?: OnChangeInputState;
}
const CardOwnerNameInput = (props: CardOwnerNameInputProps) => {
  const ownerNameInputState = useInput({
    inputRegex: NameRegex,
  });

  useEffect(() => {
    props?.onChangeInputState?.call(null, {
      value: ownerNameInputState.value,
      displayValue: ownerNameInputState.value,
      isValid: ownerNameInputState.isValid,
      displayName: CardOwnerNameInput.displayName,
    });
  }, [ownerNameInputState.value]);

  return (
    <div className="input-container">
      <span className="input-title">
        카드 소유자 이름(선택) (현재 입력 자릿수:{" "}
        {ownerNameInputState.value.length}, 최대 입력 자릿수:{" "}
        {MaxLength.OwnerNameInput})
      </span>
      <input
        type={ownerNameInputState.type}
        className="input-basic"
        maxLength={MaxLength.OwnerNameInput}
        value={ownerNameInputState.value}
        onChange={ownerNameInputState.onChange}
      />
    </div>
  );
};

CardOwnerNameInput.displayName = "CardOwnerNameInput";

export default CardOwnerNameInput;
