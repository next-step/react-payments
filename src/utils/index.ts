export const checkCardNumber = (string: string): string => {
  let newString = string.replace(/[^0-9\-\*]/g, ""); //숫자만입력받기
  if (/^(\d{4})(\d)/.test(newString)) {
    newString = newString.replace(/^(\d{4})(\d)/, "$1-$2");
  }
  if (/^(\d{4}-\d{4})(\d)/.test(newString)) {
    newString = newString.replace(/^(\d{4}-\d{4})(\d)/, "$1-$2");
    newString = newString.slice(0, 10).padEnd(newString.length, "*");
  }
  // 첫번째 *
  if (/^(\d{4}-\d{4}-\*{1,3}[\d])/.test(newString)) {
    newString = newString.slice(0, 10).padEnd(newString.length, "*");
  }
  if (/^(\d{4}-\d{4})(-\*{4})[\d]/.test(newString)) {
    newString = newString.replace(/^(\d{4}-\d{4})(-\*{4})/, "$1$2-");
    newString = newString.slice(0, 15).padEnd(newString.length, "*");
  }

  if (/^(\d{4}-\d{4}-\*{4})/.test(newString)) {
    if (newString.length >= 20) return newString.slice(0, 19);
    newString = newString.slice(0, 15).padEnd(newString.length, "*");
  }
  return newString;
};
export const checkCardSecurityInput = (string: string) => {
  let newString = string.replace(/[^0-9\*]/g, ""); //숫자 or *
  return newString.replaceAll(/[0-9]/g, "*");
};
