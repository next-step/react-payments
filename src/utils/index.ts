export function isNumber(value: string) {
  return /^\d+$/.test(value);
}

export function getCurrentYear(format: 'yyyy' | 'yy' = 'yyyy') {
  const currentYear = String(new Date().getFullYear());

  const formattingYear = {
    yyyy: currentYear,
    yy: currentYear.slice(2),
  }[format];

  return Number(formattingYear);
}
