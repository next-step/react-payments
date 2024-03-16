import { RefObject } from 'react';

export const isValidInputRef = (ref: RefObject<HTMLInputElement | null>): ref is RefObject<HTMLInputElement> =>
  ref !== null;
