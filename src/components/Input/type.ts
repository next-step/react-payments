import { Colors } from '@/styles/colors';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  format?: (value: string) => string;
  textAlign?: 'left' | 'center' | 'right';
  width?: string;
  fontColor?: Colors;
  type?: 'text' | 'password';
}

export interface LineInputProps extends TextInputProps {
  lineColor?: Colors;
}
