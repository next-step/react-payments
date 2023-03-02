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
