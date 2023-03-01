import React, { ChangeEvent } from 'react';
import { StyledTextInput } from './TextInput.style';
import { Colors, colors } from '@/styles/colors';

export type TextInputProps = {
  label: string;
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  select?: (value: string) => string;
  textAlign?: 'left' | 'center' | 'right';
  width?: string;
  fontColor: Colors;
  type?: 'text' | 'password';
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

const TextInput = (
  {
    label,
    value,
    onChange,
    placeholder,
    fontColor,
    select,
    textAlign = 'left',
    width = '100%',
    type = 'text',
    ...InputProps
  }: TextInputProps,
  ref?: React.Ref<HTMLInputElement>
) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledTextInput
      width={width}
      ref={ref}
      type={type}
      color={colors[fontColor]}
      textAlign={textAlign}
      placeholder={placeholder}
      aria-label={label}
      onChange={handleChange}
      value={value && (select ? select(value) : value)}
      {...InputProps}
    />
  );
};

export default React.memo(React.forwardRef(TextInput));
