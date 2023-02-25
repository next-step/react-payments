import { ExpirationDate } from "@/store/Provider";
import { ChangeEvent, useEffect, useState } from "react";

const MAX_DATE_LENGTH = 2;
const CURRENT_YEAR = Number(new Date().getFullYear().toString().slice(-2));

type CardExpirationDateInputProps = {
  handleChangeExpirationDate: (input: ExpirationDate) => void;
};

const CardExpirationDateInput = ({
  handleChangeExpirationDate,
}: CardExpirationDateInputProps) => {
  const [expiredDate, setExpiredDate] = useState<ExpirationDate>({
    month: "",
    year: "",
  });

  const handleOnExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "month" && Number.isNaN(+value)) {
      alert("카드 유효기간은 숫자만 입력해주세요!");
      return;
    }

    if (name === "month") {
      if (+value > 12) {
        alert("월은 1이상 12이하 숫자여야 합니다.");
        expiredDate.month = "";
        return;
      }
    }

    if (name === "year") {
      if (value.length === MAX_DATE_LENGTH && +value < CURRENT_YEAR) {
        alert("년도는 현재년도보다 적을 수 없습니다.");
        expiredDate.year = "";
        return;
      }
    }

    setExpiredDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    handleChangeExpirationDate(expiredDate);
    // eslint-disable-next-line
  }, [expiredDate]);

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          name="month"
          maxLength={MAX_DATE_LENGTH}
          value={expiredDate.month}
          onChange={handleOnExpirationDate}
          required
        />
        {"/"}
        <input
          className="input-basic"
          type="text"
          placeholder="YY"
          name="year"
          maxLength={MAX_DATE_LENGTH}
          value={expiredDate.year}
          onChange={handleOnExpirationDate}
          required
        />
      </div>
    </div>
  );
};

export default CardExpirationDateInput;
