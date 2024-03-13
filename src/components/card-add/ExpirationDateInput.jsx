import {
  MONTH,
  MONTH_MAX_LENGTH,
  YEAR,
  YEAR_MAX_LENGTH,
} from "../../constants/expirationDate";
import { useAutoFocus } from "../../hook/useAutoFocus";
import { useCardState } from "../../hook/useCardState";
import { getNumberString } from "../../util/regExp";
import Input from "../atomic-design-pattern/atom/Input";
import InputBox from "../atomic-design-pattern/molecule/InputBox";

const expirationDateRefMap = {
  [MONTH]: YEAR,
  [YEAR]: null,
};

export default function ExpirationDateInput() {
  const { cardState, setCardState } = useCardState();
  const [expirationDateRef, changeFocus] = useAutoFocus(expirationDateRefMap);

  const onChangeExpirationDate = (event) => {
    const { name, value, maxLength } = event.target;
    const onlyNumberValue = getNumberString(value);

    // 유효하지 않은 월
    if (name === MONTH && +onlyNumberValue > 12) {
      return;
    }

    changeFocus(onlyNumberValue.length === maxLength, name);
    setCardState((prev) => {
      const newExpirationDate = {
        ...prev.expirationDate,
        [name]: onlyNumberValue,
      };

      return { ...prev, expirationDate: newExpirationDate };
    });
  };

  return (
    <InputBox className="w-50">
      <Input
        value={cardState.expirationDate[MONTH]}
        onChange={onChangeExpirationDate}
        name={MONTH}
        ref={(el) => (expirationDateRef.current[MONTH] = el)}
        type="text"
        placeholder="MM"
        maxLength={MONTH_MAX_LENGTH}
      />
      <Input
        value={cardState.expirationDate[YEAR]}
        name={YEAR}
        ref={(el) => (expirationDateRef.current[YEAR] = el)}
        onChange={onChangeExpirationDate}
        type="text"
        placeholder="YY"
        maxLength={YEAR_MAX_LENGTH}
      />
    </InputBox>
  );
}
