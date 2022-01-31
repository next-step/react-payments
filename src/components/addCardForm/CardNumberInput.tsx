import { DigitRegex, InputType, MaxLength } from "@common/constants";
import useInput, { IUseInputConfig, IUseInputState } from "@hooks/useInput";
import { useEffect } from "react";
import { OnChangeInputState } from "./AddCardForm";

interface CardNumberInputProps {
  onChangeInputState?: OnChangeInputState;
}

const CardNumberInput = (props: CardNumberInputProps) => {
  const cardNumConfig: IUseInputConfig = {
    inputRegex: DigitRegex,
    validator: (val) => val.length === MaxLength.CardNumberInput,
  };

  const cardNumInputStateList: IUseInputState[] = [
    useInput(cardNumConfig),
    useInput(cardNumConfig),
    useInput({ ...cardNumConfig, type: InputType.password }),
    useInput({ ...cardNumConfig, type: InputType.password }),
  ];

  useEffect(
    () => {
      const value = cardNumInputStateList
        .map((numInputState) => numInputState.value)
        .filter((inputVal) => inputVal.length > 0)
        .join(" - ");

      const displayValue = cardNumInputStateList
        .map((numInputState) =>
          numInputState.type === InputType.password
            ? "*".repeat(numInputState.value.length)
            : numInputState.value
        )
        .filter((inputVal) => inputVal.length > 0)
        .join(" - ");

      props?.onChangeInputState?.call(null, {
        value,
        displayValue,
        isValid: cardNumInputStateList.every((state) => state.isValid),
        displayName: CardNumberInput.displayName,
      });
    },
    cardNumInputStateList.map((inputState) => inputState.value)
  );

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {cardNumInputStateList.map((cardNumInputState, i) => (
          <input
            className="input-basic"
            type={cardNumInputState.type}
            maxLength={MaxLength.CardNumberInput}
            value={cardNumInputState.value}
            onChange={cardNumInputState.onChange}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

CardNumberInput.displayName = "CardNumberInput";

export default CardNumberInput;
