import styled from '@emotion/styled';
import React from 'react';
type EmptyCardButtonProps = {
  onClick: () => void;
};

const EmptyCardButton = ({ onClick }: EmptyCardButtonProps) => {
  return (
    <EmptyCardButtonContainer onClick={onClick}>+</EmptyCardButtonContainer>
  );
};

export default EmptyCardButton;

const EmptyCardButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;

  width: 208px;
  height: 130px;

  font-size: 30px;
  color: #575757;

  background: #e5e5e5;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;
`;
