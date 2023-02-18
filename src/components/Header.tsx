import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const S = {
  Title: styled.h2`
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #383838;
    cursor: pointer;
  `,
};

interface ITitle {
  onClick?: () => void;
  title: string;
  path: string;
}

const Header = ({ onClick, title, path }: ITitle) => {
  return (
    <Link to={path}>
      <S.Title onClick={onClick}>{title}</S.Title>
    </Link>
  );
};

export default Header;
