import { MutableRefObject } from 'react';

export type InputType = 'all' | 'numeric' | 'alphabetic' | 'alphanumeric';
export type UpdateValueProps = {
  index: number;
  value: string;
  inputRefs: MutableRefObject<HTMLInputElement | null>[];
  maxLength: number;
  focus: boolean;
};
