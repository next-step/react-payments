import React from 'react';
import { EmptyCardButtonContainer } from './EmptyCardButton.style';

type EmptyCardButtonProps = {
  onClick: () => void;
};

const EmptyCardButton = ({ onClick }: EmptyCardButtonProps) => {
  return (
    <EmptyCardButtonContainer onClick={onClick}>+</EmptyCardButtonContainer>
  );
};

export default React.memo(EmptyCardButton);
