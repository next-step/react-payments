import { createContext, RefObject, ReactElement } from 'react';
import type { UpdateValueProps, InputType } from './Input.type';

export type FormatInputContextValue = {
  id: string;
  values: string[];
  inputElementCount: number;
  updateValue: ({ index, value, inputRefs, maxLength, focus }: UpdateValueProps) => void;
  inputRefs: RefObject<HTMLInputElement | null>[];
  type: InputType;
  mask: boolean;
  separator: string | ReactElement;
  showCompletedSeparator?: boolean;
  error: boolean;
};

export const FormatInputContext = createContext<FormatInputContextValue | null>(null);
