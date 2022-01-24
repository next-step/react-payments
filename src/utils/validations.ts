const hasNonNumberChar = (value: string) => {
  return /[^0-9]|[-.]/.test(value);
};

export { hasNonNumberChar };
