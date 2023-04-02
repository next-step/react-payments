export function getYearFormatYY() {
  const year = new Date().getFullYear();
  return year % 100;
}
