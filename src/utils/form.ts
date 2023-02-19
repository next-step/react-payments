const SLASH = '/';

export const handleDigit = (digit: string, targetName: string) => {
  const value = digit.replace(/\D+/g, '');
  const length = value.length;
  const nextId = Number(targetName.split('digit')[1]) + 1;
  if (length === 4) nextFocus('digit' + nextId);
  return value;
};

export const handleExpire = (digit: string) => {
  const value = digit.replace(/\D+/g, '');
  const length = value.length;

  if (Number(value.substring(0, 2)) > 12) {
    alert('1이상 12이하의 월을 입력해주세요');
    return '';
  }

  let result = '';
  if (length < 3) result = value;
  else if (length < 5) {
    result += value.substring(0, 2);
    result += SLASH;
    result += value.substring(2);
  } else {
    result += value.substring(0, 2);
    result += SLASH;
    result += value.substring(2, 4);
  }

  return result;
};

export const handlePassword = (digit: string, targetName: string) => {
  const value = digit.replace(/\D+/g, '');
  const length = value.length;
  const nextId = Number(targetName.split('ps')[1]) + 1;
  if (length === 1) nextFocus('ps' + nextId);
  return digit.replace(/\D+/g, '');
};

export const nextFocus = (id: string) => {
  const nextRef = document.getElementById(id);
  if (!nextRef) return;
  nextRef.focus();
};
