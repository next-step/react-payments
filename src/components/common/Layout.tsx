import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { COLOR } from '../../constant/color';

const Layout = () => {
  const S = {
    Root: styled.div`
      background-color: ${COLOR.WHITE};
      width: 375px;
      min-width: 375px;
      height: 700px;
      position: relative;
      border-radius: 15px;
    `,
    App: styled.div`
      height: 100%;
      padding: 32px 24px;
      margin-top: 20px;
    `,
  };
  return (
    <S.Root>
      <S.App>
        <Outlet />
      </S.App>
    </S.Root>
  );
};

export default Layout;
