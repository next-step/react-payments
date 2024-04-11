import { RefObject } from 'react';

export const isValidInputRef = (
  ref: RefObject<HTMLInputElement | null> | ((instance: HTMLInputElement | null) => void),
): ref is RefObject<HTMLInputElement> => ref !== null;
