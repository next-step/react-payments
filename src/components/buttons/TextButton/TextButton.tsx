import React from 'react';
import { StyledTextButton } from './TextButton.style';
import { Colors } from '@/styles/colors';

type TextButtonProps = {
  text: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  form?: string;
  color?: Colors;
};

const TextButton = ({
  onClick,
  text,
  disabled,
  color = 'primary',
  type,
  label,
  form,
}: TextButtonProps) => {
  return (
    <StyledTextButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={label}
      form={form}
      fontColor={color}
    >
      {text}
    </StyledTextButton>
  );
};

export default React.memo(TextButton);
