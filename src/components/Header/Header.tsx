import styled from '@emotion/styled';
import React from 'react';
import { HeaderContainer, RightIconButton } from './Header.style';

type HeaderProps = {
  title: string;
  rightIcon?: React.ReactNode;
  onIconClick?: () => void;
};

const Header = ({ title, rightIcon, onIconClick }: HeaderProps) => {
  const handleClick = () => {
    onIconClick && onIconClick();
  };
  return (
    <HeaderContainer>
      {rightIcon && (
        <RightIconButton onClick={handleClick}>{rightIcon}</RightIconButton>
      )}
      <h2>{title}</h2>
    </HeaderContainer>
  );
};

export default Header;
