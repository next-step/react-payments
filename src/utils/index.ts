export const isNumber = (input: string): boolean => {
  if (
    input &&
    input.length % 5 !== 0 &&
    !/^[0-9]+$/.test(input[input.length - 1])
  ) {
    return false;
  }
  return true;
};

export const formatNumber = (
  input: string,
  nth: number,
  formatter: string = "-"
): string => {
  const length = input?.length;

  // 처음 이후로 formatter가 붙을 때
  if (input.includes(formatter) && (length + 1) % nth === 0) {
    return input.slice(0, length) + formatter + input.slice(length);
  }
  // 처음 formatter가 붙을 때
  if (!input.includes(formatter) && length % (nth - 1) === 0) {
    return input + formatter;
  }

  return input;
};

export const monthConverter = (input: string) => {
  if (parseInt(input) < 1) {
    return "1";
  } else if (parseInt(input) > 12) {
    return "12";
  }
  return input;
};

export const characterCount = (text: string): number => {
  if (!text) {
    return 0;
  }

  return text.trim().length;
};

export const displayNumber = ({
  input,
  formatter = "-",
  converter = "*",
  startPoint,
}: {
  input: string;
  formatter?: string;
  converter?: string;
  startPoint: number;
}) => {
  let numberList = input.split(formatter);
  if (numberList[startPoint]) {
    for (let i = startPoint; i < numberList.length; i++) {
      numberList[i] = converter.repeat(numberList[i].length);
    }

    return numberList.join(formatter);
  }

  return input;
};
