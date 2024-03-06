import {
  MONTH,
  MONTH_MAX_LENGTH,
  YEAR,
  YEAR_MAX_LENGTH,
} from "../../constants/expirationDate";
import { getNumberString } from "../../util/regExp";

export default function ExpirationDateInput({
  expirationDate,
  setExpirationDate,
}) {
  const onChangeExpirationDate = (event) => {
    const { name, value } = event.target;
    const onlyNumberValue = getNumberString(value);

    // 유효하지 않은 월
    if (name === MONTH && +onlyNumberValue > 12) {
      return;
    }

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
        className="input-basic"
        type="text"
        placeholder="MM"
        maxLength={MONTH_MAX_LENGTH}
      />
      <input
        value={expirationDate[YEAR]}
        name={YEAR}
        onChange={onChangeExpirationDate}
        className="input-basic"
        type="text"
        placeholder="YY"
        maxLength={YEAR_MAX_LENGTH}
      />
    </div>
  );
}
