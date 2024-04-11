import { createContext, RefObject } from 'react';
import { InputType, UpdateValueProps } from '@/shared';

type PinInputContextValue = {
  values: string[];
  inputElementCount: number;
  updateValue: ({ index, value, inputRefs, maxLength, focus }: UpdateValueProps) => void;
  inputRefs: RefObject<HTMLInputElement | null>[];
  type: InputType;
  mask: boolean;
  id?: string;
  placeholder?: string;
  enableVirtualKeyboard?: boolean;
};

export const PinInputContext = createContext<PinInputContextValue | null>(null);
