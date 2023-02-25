import React from 'react';
import { StyledTextButton } from './TextButton.style';

type TextButtonProps = {
  onClick: () => void;
  text: string;
  disabled?: boolean;
};

const TextButton = ({ onClick, text, disabled }: TextButtonProps) => {
  return (
    <StyledTextButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledTextButton>
  );
};

export default React.memo(TextButton);
