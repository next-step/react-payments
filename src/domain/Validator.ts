export default function Validator() {
  function isEnterCardNumber(cardNumberData: object, maxLength: number): boolean {
    return Object.values(cardNumberData).every((item) => item.value.length === maxLength);
  }

  function isPreviousDate(year: string, month: string): boolean {
    if (isNaN(Number(year)) || isNaN(Number(month))) {
      return true;
    }

    if (year.length < 2 || month.length < 2) {
      return true;
    }

    const frontYear = Math.floor(new Date().getFullYear() / 100);
    const date = new Date(`${frontYear}${year}/${month}`);
    const currentDate = new Date();

    return date.getTime() < currentDate.getTime();
  }

  return {
    isEnterCardNumber,
    isPreviousDate,
  };
}
