import { ChangeEvent, useEffect, useRef, useState } from "react";

const CURRENT_YEAR = Number(new Date().getFullYear().toString().slice(-2));
const MAX_DATE_LENGTH = 2;

const CardExpirationDateInput = () => {
  const [expirationDate, setExpirationDate] = useState(["", ""]);
  const [error, setError] = useState("");
  const nextElement = useRef<HTMLInputElement>(null);

  const setExpirationDateByIndex =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const updatedExpirationDate = [...expirationDate];
      const { value } = e.target as HTMLInputElement;
      updatedExpirationDate[index] = value;

      if (index === 0) {
        if (Number(value) > 12) {
          setError("월은 1이상 12이하 숫자여야 합니다.");
          expirationDate[index] = "";
          return;
        }
        if (updatedExpirationDate[index].length === MAX_DATE_LENGTH) {
          if (nextElement.current) {
            nextElement.current.focus();
          }
        }
      }

      if (index === 1) {
        if (updatedExpirationDate[index].length === MAX_DATE_LENGTH) {
          if (Number(value) < CURRENT_YEAR) {
            setError("년도는 현재년도보다 적을 수 없습니다.");
            expirationDate[index] = "";
            return;
          }
        }
      }

      setExpirationDate(updatedExpirationDate);
    };

  useEffect(() => {
    // onChange(expirationDate, error);
  }, [expirationDate, error]);
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          maxLength={MAX_DATE_LENGTH}
          value={expirationDate[0]}
          onChange={setExpirationDateByIndex(0)}
          required
        />
        {"/"}
        <input
          className="input-basic"
          type="text"
          placeholder="YY"
          maxLength={MAX_DATE_LENGTH}
          value={expirationDate[1]}
          onChange={setExpirationDateByIndex(1)}
          required
        />
      </div>
    </div>
  );
};

export default CardExpirationDateInput;
