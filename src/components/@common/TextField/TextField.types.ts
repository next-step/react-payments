import { InputHTMLAttributes } from 'react';

export const ValidationStatus = {
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  validationStatus?: (typeof ValidationStatus)[keyof typeof ValidationStatus];
}
