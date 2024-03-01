export const toMaskedCardNumber = (value: string) =>
  value
    .split("")
    .map((str, index) => {
      const displayedStr = index > 7 ? "*" : str;
      return index !== 0 && index % 4 === 0 ? `-${displayedStr}` : displayedStr;
    })
    .join("");
