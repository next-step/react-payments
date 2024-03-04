import {
  FIRST_NUMBER,
  FOURTH_NUMBER,
  SECOND_NUMBER,
  THIRD_NUMBER,
} from "../../constants/cardNumber";
import { getNumberString } from "../../util/regExp";

export default function CardNumberInput({ cardNumber, setCardNumber }) {
  const onChangeCardNumber = (event) => {
    const { value, name } = event.target;

    const onlyNumberValue = getNumberString(value);

    setCardNumber((prev) => {
      return { ...prev, [name]: onlyNumberValue };
    });
  };

  return (
    <div className="input-box">
      <input
        className="input-basic"
        value={cardNumber[FIRST_NUMBER]}
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
            cardNumber[FIRST_NUMBER].length === 4 ? "visible" : "hidden",
        }}
        disabled
      />

      <input
        className="input-basic"
        value={cardNumber[SECOND_NUMBER]}
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
            cardNumber[SECOND_NUMBER].length === 4 ? "visible" : "hidden",
        }}
        disabled
      />
      <input
        className="input-basic"
        value={cardNumber[THIRD_NUMBER]}
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
            cardNumber[THIRD_NUMBER].length === 4 ? "visible" : "hidden",
        }}
        disabled
      />
      <input
        className="input-basic"
        value={cardNumber[FOURTH_NUMBER]}
        name={FOURTH_NUMBER}
        type="password"
        maxLength="4"
        onChange={onChangeCardNumber}
      />
    </div>
  );
}
