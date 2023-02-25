import React from 'react';
import TextInput from './TextInput';
import { Colors } from '@/styles/colors';

type NumberPasswordProps = {
  fontColor: Colors;
  onChange: (value: string) => void;
  label: string;
  value: string;
  maxLength: number;
  width?: string;
};
const NumberPassword = ({
  fontColor,
  onChange,
  label,
  value,
  maxLength,
  width,
}: NumberPasswordProps) => {
  return (
    <TextInput
      maxLength={maxLength}
      width={width}
      label={label}
      onChange={onChange}
      value={value}
      fontColor={fontColor}
      inputMode="numeric"
      type="password"
      textAlign="center"
    />
  );
};

export default NumberPassword;
