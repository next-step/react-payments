import React from 'react';
import { TextButtonContainer } from './TextButton.style';

type TextButtonProps = {
  onClick: () => void;
  text: string;
};

const TextButton = ({ onClick, text }: TextButtonProps) => {
  return (
    <TextButtonContainer>
      <button onClick={onClick}>{text}</button>
    </TextButtonContainer>
  );
};

export default React.memo(TextButton);
