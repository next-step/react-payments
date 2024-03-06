import {
  MONTH,
  MONTH_MAX_LENGTH,
  YEAR,
  YEAR_MAX_LENGTH,
} from "../../constants/expirationDate";
import { useAutoFocus } from "../../hook/useAutoFocus";
import { getNumberString } from "../../util/regExp";

const expirationDateRefMap = {
  [MONTH]: YEAR,
  [YEAR]: null,
};

export default function ExpirationDateInput({
  expirationDate,
  setExpirationDate,
}) {
  const [expirationDateRef, changeFocus] = useAutoFocus(expirationDateRefMap);
  const onChangeExpirationDate = (event) => {
    const { name, value, maxLength } = event.target;
    const onlyNumberValue = getNumberString(value);

    // 유효하지 않은 월
    if (name === MONTH && +onlyNumberValue > 12) {
      return;
    }

    changeFocus(onlyNumberValue.length === maxLength, name);

    setExpirationDate((prev) => {
      return { ...prev, [name]: onlyNumberValue };
    });
  };

  return (
    <div className="input-box w-50">
      <input
        value={expirationDate[MONTH]}
        onChange={onChangeExpirationDate}
        name={MONTH}
        ref={(el) => (expirationDateRef.current[MONTH] = el)}
        className="input-basic"
        type="text"
        placeholder="MM"
        maxLength={MONTH_MAX_LENGTH}
      />
      <input
        value={expirationDate[YEAR]}
        name={YEAR}
        ref={(el) => (expirationDateRef.current[YEAR] = el)}
        onChange={onChangeExpirationDate}
        className="input-basic"
        type="text"
        placeholder="YY"
        maxLength={YEAR_MAX_LENGTH}
      />
    </div>
  );
}
