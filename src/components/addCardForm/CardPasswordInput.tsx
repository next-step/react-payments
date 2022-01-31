import { DigitRegex, InputType, MaxLength } from "@common/constants";
import useInput, { IUseInputConfig, IUseInputState } from "@hooks/useInput";
import { useEffect } from "react";
import { OnChangeInputState } from "./AddCardForm";

interface CardPasswordInputProps {
  onChangeInputState?: OnChangeInputState;
}

const CardPasswordInput = ({ onChangeInputState }: CardPasswordInputProps) => {
  const passwordInputConfig: IUseInputConfig = {
    inputRegex: DigitRegex,
    validator: (val) => val.length === MaxLength.CardPasswordInput,
    type: InputType.password,
  };

  const passwordInputStateList: IUseInputState[] = [
    useInput(passwordInputConfig),
    useInput(passwordInputConfig),
  ];

  useEffect(
    () => {
      const value = passwordInputStateList
        .map((inputState) => inputState.value)
        .join("");
      onChangeInputState?.({
        value,
        displayValue: "",
        isValid: passwordInputStateList.every((state) => state.isValid),
        displayName: CardPasswordInput.displayName,
      });
    },
    passwordInputStateList.map((inputState) => inputState.value)
  );

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      {passwordInputStateList.map((passwordInputState, i) => (
        <input
          className="input-basic w-15"
          type={passwordInputState.type}
          maxLength={MaxLength.CardPasswordInput}
          onChange={passwordInputState.onChange}
          value={passwordInputState.value}
          key={i}
        />
      ))}
      <input className="input-basic w-15" type="password" value={0} disabled />
      <input className="input-basic w-15" type="password" value={0} disabled />
    </div>
  );
};

CardPasswordInput.displayName = "CardPasswordInput";

export default CardPasswordInput;
