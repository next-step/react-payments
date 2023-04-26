import { CARD_VIRTUAL_KEYBOARD } from '../../domain/payments/constants';

const { NUMBER_KEYS, FUNCTION_KEY_DELETE, FUNCTION_KEY_RESET } = CARD_VIRTUAL_KEYBOARD;
const FUNCTION_KEYS: string[] = [FUNCTION_KEY_DELETE, FUNCTION_KEY_RESET];

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

export const processPressKey = (accumulated: string, key: string) => {
  if (!FUNCTION_KEYS.includes(key)) {
    return accumulated + key;
  }

  switch (key) {
    default:
    case FUNCTION_KEY_DELETE:
      return accumulated.substring(0, accumulated.length - 1);
    case FUNCTION_KEY_RESET:
      return '';
  }
};
