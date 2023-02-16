import React from 'react';
import { TextInputContainer, TextInputStyle } from './TextInput.style';
import { Colors, colors } from '@/styles/colors';

type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  textAlign?: 'left' | 'center' | 'right';
  width?: string;
  fontColor: Colors;
};

const TextInput = ({
  label,
  value,
  onChange,
  placeholder,
  textAlign = 'left',
  width = '100%',
  fontColor,
}: TextInputProps) => {
  const handleChange = () => {
    onChange(value);
  };
  return (
    <TextInputContainer width={width}>
      <TextInputStyle
        color={colors[fontColor]}
        textAlign={textAlign}
        placeholder={placeholder}
        aria-label={label}
        onChange={handleChange}
        value={value}
      />
    </TextInputContainer>
  );
};

export default TextInput;
