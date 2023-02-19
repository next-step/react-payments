import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const S = {
    Root: styled.div`
      background-color: #fff;
      width: 375px;
      min-width: 375px;
      height: 700px;
      position: relative;
      border-radius: 15px;
    `,
  };
  return (
    <S.Root>
      <Outlet />
    </S.Root>
  );
};

export default Layout;
