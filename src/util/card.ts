import { convertToEncryptedChars } from './string';

// TODO: 이것을 도메인으로 봐야 할까, 보편적인 코드로 보아야 할까?
export const getDisplayCardNumbers = (cardNumbers: string[]) =>
  [...cardNumbers.slice(0, 2), ...cardNumbers.slice(2, 4).map(convertToEncryptedChars)].join('-');
