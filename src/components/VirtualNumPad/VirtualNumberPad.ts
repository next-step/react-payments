const NUMBER_KEYS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => String(n));
const FUNCTION_KEYS = ['지움', '초기화'];

export type TVirtualNumberPad = string[];

export const getRandomNumberPad = (): string[] => {
  const shuffle = () => Math.random() - 0.5;
  const numbers = [...NUMBER_KEYS].sort(shuffle);

  return [
    //
    FUNCTION_KEYS[0],
    ...numbers.slice(0, 1),
    FUNCTION_KEYS[1],
    ...numbers.slice(1),
  ].reverse() as string[];
};
