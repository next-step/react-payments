import React, { ChangeEvent } from 'react';
import { LineInputProps } from '../type';
import { StyledLineInput } from './LineInput.style';

const LineInput = (
  {
    label,
    value,
    onChange,
    placeholder,
    fontColor = 'gray3',
    lineColor = 'gray3',
    format,
    textAlign = 'left',
    width = '100%',
    type = 'text',
    ...InputProps
  }: LineInputProps,
  ref?: React.Ref<HTMLInputElement>
) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <StyledLineInput
      width={width}
      ref={ref}
      type={type}
      fontColor={fontColor}
      lineColor={lineColor}
      textAlign={textAlign}
      placeholder={placeholder}
      aria-label={label}
      onChange={handleChange}
      value={value && (format ? format(value) : value)}
      {...InputProps}
    />
  );
};

export default React.memo(React.forwardRef(LineInput));
