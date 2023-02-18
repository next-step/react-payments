import styled from '@emotion/styled';
import React from 'react';
import { HeaderContainer, LeftIconButton } from './Header.style';

type HeaderProps = {
  title: string;
  leftIcon?: React.ReactNode;
  onIconClick?: () => void;
};

const Header = ({ title, leftIcon, onIconClick }: HeaderProps) => {
  const handleClick = () => {
    onIconClick && onIconClick();
  };
  return (
    <HeaderContainer>
      {leftIcon && (
        <LeftIconButton onClick={handleClick}>{leftIcon}</LeftIconButton>
      )}
      <h2>{title}</h2>
    </HeaderContainer>
  );
};

export default Header;
