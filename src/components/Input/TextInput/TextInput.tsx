import React, { ChangeEvent } from 'react';
import { StyledTextInput } from './TextInput.style';
import { TextInputProps } from '../type';

const TextInput = (
  {
    label,
    value,
    onChange,
    placeholder,
    fontColor = 'gray3',
    format,
    textAlign = 'left',
    width = '100%',
    type = 'text',
    ...InputProps
  }: TextInputProps,
  ref?: React.Ref<HTMLInputElement>
) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <StyledTextInput
      width={width}
      ref={ref}
      type={type}
      fontColor={fontColor}
      textAlign={textAlign}
      placeholder={placeholder}
      aria-label={label}
      onChange={handleChange}
      value={value && (format ? format(value) : value)}
      {...InputProps}
    />
  );
};

export default React.memo(React.forwardRef(TextInput));
