const SEPARATOR = ' / ';
// TODO : 추상화 필요 (addDashes 와 비슷한 로직)
export const addSeparator = (str: string) => {
  const textLength = str.length;
  if (textLength < 2) return str;
  const formatted = str.replace(/(.{2})/g, `$1${SEPARATOR}`);
  if (textLength === 4 || textLength === 2) {
    return formatted.slice(0, -SEPARATOR.length);
  }
  return formatted;
};
