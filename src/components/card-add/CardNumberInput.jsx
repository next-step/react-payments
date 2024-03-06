import {
  FIRST_NUMBER,
  FOURTH_NUMBER,
  SECOND_NUMBER,
  THIRD_NUMBER,
} from "../../constants/cardNumber";
import { useAutoFocus } from "../../hook/useAutoFocus";
import { getNumberString } from "../../util/regExp";
import Input from "../atomic-design-pattern/atom/Input";

const nextRefMap = {
  [FIRST_NUMBER]: [SECOND_NUMBER],
  [SECOND_NUMBER]: [THIRD_NUMBER],
  [THIRD_NUMBER]: [FOURTH_NUMBER],
  [FOURTH_NUMBER]: null,
};

export default function CardNumberInput({ cardNumber, setCardNumber }) {
  const [cardNumberRef, changeFocus] = useAutoFocus(nextRefMap);

  const onChangeCardNumber = (event) => {
    const { value, name, maxLength } = event.target;

    const onlyNumberValue = getNumberString(value);

    changeFocus(onlyNumberValue.length === maxLength, name);

    setCardNumber((prev) => {
      return { ...prev, [name]: onlyNumberValue };
    });
  };

  return (
    <div className="input-box">
      <Input
        value={cardNumber[FIRST_NUMBER]}
        name={FIRST_NUMBER}
        ref={(el) => (cardNumberRef.current[FIRST_NUMBER] = el)}
        maxLength="4"
        onChange={onChangeCardNumber}
      />

      <Input
        defaultValue="-"
        isHidden={cardNumber[FIRST_NUMBER].length !== 4}
        disabled
      />

      <Input
        value={cardNumber[SECOND_NUMBER]}
        name={SECOND_NUMBER}
        ref={(el) => (cardNumberRef.current[SECOND_NUMBER] = el)}
        type="text"
        maxLength="4"
        onChange={onChangeCardNumber}
      />
      <Input
        defaultValue="-"
        isHidden={cardNumber[SECOND_NUMBER].length !== 4}
        disabled
      />
      <Input
        value={cardNumber[THIRD_NUMBER]}
        name={THIRD_NUMBER}
        ref={(el) => (cardNumberRef.current[THIRD_NUMBER] = el)}
        type="password"
        maxLength="4"
        onChange={onChangeCardNumber}
      />
      <Input
        defaultValue="-"
        isHidden={cardNumber[THIRD_NUMBER].length !== 4}
        disabled
      />
      <Input
        value={cardNumber[FOURTH_NUMBER]}
        name={FOURTH_NUMBER}
        ref={(el) => (cardNumberRef.current[FOURTH_NUMBER] = el)}
        type="password"
        maxLength="4"
        onChange={onChangeCardNumber}
      />
    </div>
  );
}
