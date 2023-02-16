import React from 'react';
import { TextInputContainer, TextInputStyle } from './TextInput.style';
import { Colors, colors } from '@/styles/colors';

type TextInputProps = {
  label: string;
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  select?: (value: string) => string;
  textAlign?: 'left' | 'center' | 'right';
  width?: string;
  fontColor: Colors;
  type?: 'text' | 'password';
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
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
}: TextInputProps) => {
  const handleChange = () => {
    value && onChange(value);
  };

  return (
    <TextInputContainer width={width}>
      <TextInputStyle
        type={type}
        color={colors[fontColor]}
        textAlign={textAlign}
        placeholder={placeholder}
        aria-label={label}
        onChange={handleChange}
        value={value && (select ? select(value) : value)}
        {...InputProps}
      />
    </TextInputContainer>
  );
};

export default React.memo(TextInput);
