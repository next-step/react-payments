import { useState, useEffect } from "react";

export const useCardExpirationDate = (
  expirationDate: string,
  setExpirationDate: (value: string) => void
) => {
  const [month, setMonth] = useState(expirationDate.slice(0, 2));
  const [year, setYear] = useState(expirationDate.slice(3));

  useEffect(() => {
    setExpirationDate(`${month}/${year}`);
  }, [month, year, setExpirationDate]);

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxLength = 2;
    const inputValue = e.target.value;
    const inputValueNumber = parseInt(inputValue, 10);
    const isInvalidMonthValue =
      isNaN(inputValueNumber) || inputValueNumber < 0 || inputValueNumber > 12;
    const isExceedingMaxLength = inputValue.length > maxLength;

    let monthValue = inputValue;

    if (isExceedingMaxLength) {
      monthValue = inputValue.slice(0, maxLength);
    }

    if (isInvalidMonthValue) {
      monthValue = "";
    }

    setMonth(monthValue);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxLength = 2;
    const inputValue = e.target.value;
    const isExceedingMaxLength = inputValue.length > maxLength;

    let yearValue = inputValue;

    if (isExceedingMaxLength) {
      yearValue = inputValue.slice(0, maxLength);
    }

    setYear(yearValue);
  };

  return { month, year, handleMonthChange, handleYearChange };
};
