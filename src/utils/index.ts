export const formatNumber = ({
  input,
  separator = "-",
  converter = "*",
  startPoint,
}: {
  input: string;
  separator?: string;
  converter?: string;
  startPoint: number;
}) => {
  const numberList = input.split(separator);

  if (!numberList[startPoint]) {
    return input;
  }

  for (let i = startPoint; i < numberList.length; i++) {
    numberList[i] = converter.repeat(numberList[i].length);
  }

  return numberList.join(separator);
};
