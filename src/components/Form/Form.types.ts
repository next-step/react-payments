import { ChangeEvent, FocusEvent, ReactNode } from 'react';

export type FormProps = {
  action?: string;
  children: ReactNode;
  onSubmit: (data: Record<string, string[]>) => void;
  onChange?: (e: ChangeEvent<HTMLFormElement>) => void;
  onBlur?: (e: FocusEvent<HTMLFormElement>) => void;
};

export type FormEventType = FocusEvent<HTMLFormElement> | ChangeEvent<HTMLFormElement>;
