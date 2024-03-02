const letterSpacingValue = (fontSize: string | number, letterSpacingPercentage: number) => {
  const numericFontSize = typeof fontSize === 'string' ? parseFloat(fontSize) : fontSize;

  if (Number.isNaN(numericFontSize)) {
    console.error('[letterSpacingValue] Invalid fontSize value:', fontSize);
    return 'normal';
  }

  return `${(numericFontSize * letterSpacingPercentage) / 100}px`;
};

export { letterSpacingValue };
