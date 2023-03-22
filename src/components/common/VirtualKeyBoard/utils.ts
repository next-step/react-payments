const shuffleArray = (array) => {
  const newArray = [...array];
  for (let idx = newArray.length - 1; idx > 0; idx--) {
    const randomPos = Math.floor(Math.random() * (idx + 1));
    const tmp = newArray[idx];
    newArray[idx] = newArray[randomPos];
    newArray[randomPos] = tmp;
  }
  return newArray;
};

export const initialVirtualKeyBoard = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return shuffleArray(numbers);
};
