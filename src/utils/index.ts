export const convertToValidationCardNumber = (string: string): string => {
  let number = string.replace(/[^0-9\-\*]/g, ""); //숫자만입력받기
  if (/^(\d{4})(\d)/.test(number)) {
    number = number.replace(/^(\d{4})(\d)/, "$1-$2");
  }
  if (/^(\d{4}-\d{4})(\d)/.test(number)) {
    number = number.replace(/^(\d{4}-\d{4})(\d)/, "$1-$2");
    number = number.slice(0, 10).padEnd(number.length, "*");
  }
  // 첫번째 *
  if (/^(\d{4}-\d{4}-\*{1,3}[\d])/.test(number)) {
    number = number.slice(0, 10).padEnd(number.length, "*");
  }
  if (/^(\d{4}-\d{4})(-\*{4})[\d]/.test(number)) {
    number = number.replace(/^(\d{4}-\d{4})(-\*{4})/, "$1$2-");
    number = number.slice(0, 15).padEnd(number.length, "*");
  }

  if (/^(\d{4}-\d{4}-\*{4})/.test(number)) {
    if (number.length >= 20) return number.slice(0, 19);
    number = number.slice(0, 15).padEnd(number.length, "*");
  }
  return number;
};
