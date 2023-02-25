import React from 'react';
import { StyledTextButton } from './TextButton.style';

type TextButtonProps = {
  onClick: () => void;
  text: string;
};

const TextButton = ({ onClick, text }: TextButtonProps) => {
  return <StyledTextButton onClick={onClick}>{text}</StyledTextButton>;
};

export default React.memo(TextButton);
