export const DASH = ' - ';

export const addDashes = (str: string) => {
  const textLength = str.length;
  if (textLength < 4) return str;
  const formatted = str.replace(/(.{4})/g, `$1${DASH}`);
  if (
    textLength === 4 ||
    textLength === 8 ||
    textLength === 12 ||
    textLength === 16
  ) {
    return formatted.slice(0, -DASH.length);
  }
  return formatted;
};

export const replaceDot = (str: string) => {
  if (str.length <= 8) return str;
  return str
    .split(DASH)
    .map((v, i) => {
      if (i === 2 || i === 3) return '•'.repeat(v.length);
      return v;
    })
    .join(DASH);
};
