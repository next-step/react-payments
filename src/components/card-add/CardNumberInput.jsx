import {
  FIRST_NUMBER,
  FOURTH_NUMBER,
  SECOND_NUMBER,
  THIRD_NUMBER,
} from "../../constants/cardNumber";
import { getNumberString } from "../../util/regExp";
import InputBox from "../InputBox";

export default function CardNumberInput({
  cardNumberValue,
  setCardNumberValue,
}) {
  const onChangeCardNumber = (event) => {
    const { value, name } = event.target;

    const onlyNumberValue = getNumberString(value);

    setCardNumberValue((prev) => {
      return { ...prev, [name]: onlyNumberValue };
    });
  };

  return (
    <InputBox>
      <input
        className="input-basic"
        value={cardNumberValue[FIRST_NUMBER]}
        name={FIRST_NUMBER}
        type="text"
        maxLength="4"
        onChange={onChangeCardNumber}
      />

      <input
        defaultValue="-"
        className="input-basic"
        style={{
          visibility:
            cardNumberValue[FIRST_NUMBER].length === 4 ? "visible" : "hidden",
        }}
        disabled
      />

      <input
        className="input-basic"
        value={cardNumberValue[SECOND_NUMBER]}
        name={SECOND_NUMBER}
        type="text"
        maxLength="4"
        onChange={onChangeCardNumber}
      />
      <input
        defaultValue="-"
        className="input-basic"
        style={{
          visibility:
            cardNumberValue[SECOND_NUMBER].length === 4 ? "visible" : "hidden",
        }}
        disabled
      />
      <input
        className="input-basic"
        value={cardNumberValue[THIRD_NUMBER]}
        name={THIRD_NUMBER}
        type="password"
        maxLength="4"
        onChange={onChangeCardNumber}
      />
      <input
        defaultValue="-"
        className="input-basic"
        style={{
          visibility:
            cardNumberValue[THIRD_NUMBER].length === 4 ? "visible" : "hidden",
        }}
        disabled
      />
      <input
        className="input-basic"
        value={cardNumberValue[FOURTH_NUMBER]}
        name={FOURTH_NUMBER}
        type="password"
        maxLength="4"
        onChange={onChangeCardNumber}
      />
    </InputBox>
  );
}
