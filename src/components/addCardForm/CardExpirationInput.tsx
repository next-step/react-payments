import { DigitRegex, MaxLength } from "@common/constants";
import { useEffect } from "react";
import useInput from "src/hooks/useInput";
import { OnChangeInputState } from "./AddCardForm";

interface CardExpirationInputProps {
  onChangeInputState?: OnChangeInputState;
}

const CardExpirationInput = (props: CardExpirationInputProps) => {
  const monthInputState = useInput({
    inputRegex: DigitRegex,
    validator: (val) => +val > 0 && +val <= 12,
  });

  const yearInputState = useInput({
    inputRegex: DigitRegex,
    validator: (val) => val.length === MaxLength.CardExpirationInput,
  });

  useEffect(() => {
    const value = [monthInputState.value, yearInputState.value]
      .filter((inputVal) => inputVal.length > 0)
      .join(" / ");

    props?.onChangeInputState?.call(null, {
      value,
      displayValue: value,
      isValid: monthInputState.isValid && yearInputState.isValid,
      name: CardExpirationInput.name,
    });
  }, [monthInputState.value, yearInputState.value]);

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          maxLength={MaxLength.CardExpirationInput}
          value={monthInputState.value}
          onChange={monthInputState.onChange}
        />
        <input
          className="input-basic"
          type="text"
          placeholder="YY"
          maxLength={MaxLength.CardExpirationInput}
          value={yearInputState.value}
          onChange={yearInputState.onChange}
        />
      </div>
    </div>
  );
};

export default CardExpirationInput;
