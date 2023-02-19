import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

interface ILayout {
  className?: string;
}

const Layout = ({ className }: ILayout) => {
  const S = {
    Root: styled.div`
      background-color: #fff;
      width: 375px;
      min-width: 375px;
      height: 700px;
      position: relative;
      border-radius: 15px;
    `,
    App: styled.div`
      height: 100%;
      padding: 16px 24px;
      &.flex-column-center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `,
  };
  return (
    <S.Root>
      <S.App className={className}>
        <Outlet />
      </S.App>
    </S.Root>
  );
};

export default Layout;
