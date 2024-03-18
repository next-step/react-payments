const VALID_UNITS = ['px', 'rem', 'em'];
const DEFAULT_UNIT = 'px';

const calculateFontSize = (fontSize: number, letterSpacingPercentage: number) => {
  const calculatedValue = (fontSize * letterSpacingPercentage) / 100;
  return `${calculatedValue}${DEFAULT_UNIT}`;
};

export const letterSpacingValue = (fontSize: string | number, letterSpacingPercentage: number) => {
  if (typeof fontSize === 'string') {
    const parsedSize = parseFloat(fontSize);

    if (Number.isNaN(parsedSize)) {
      console.error('[letterSpacingValue] Invalid fontSize value:', fontSize);
      return 'normal';
    }

    const unit = fontSize.replace(String(parsedSize), '');

    if (!VALID_UNITS.includes(unit)) {
      console.error('[letterSpacingValue] Invalid fontSize unit:', unit);
      return 'normal';
    }

    return calculateFontSize(parsedSize, letterSpacingPercentage);
  }
  return calculateFontSize(fontSize, letterSpacingPercentage);
};
