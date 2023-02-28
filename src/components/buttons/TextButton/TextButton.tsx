import React from 'react';
import { StyledTextButton } from './TextButton.style';

type TextButtonProps = {
  text: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  form?: string;
};

const TextButton = ({
  onClick,
  text,
  disabled,
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
    >
      {text}
    </StyledTextButton>
  );
};

export default React.memo(TextButton);
