import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { COLOR } from '../../constant/color';
import Modal from '../modal/Modal';

const Layout = () => {
  const S = {
    Root: styled.div`
      position: relative;
      max-width: 500px;
      min-height: 100vh;
      margin: 0 auto;
      background-color: ${COLOR.WHITE};
      overflow: hidden;
    `,
    App: styled.div`
      height: 100%;
      padding: 32px 24px;
    `,
  };
  return (
    <S.Root>
      <S.App>
        <Outlet />
      </S.App>
      <Modal />
    </S.Root>
  );
};

export default Layout;
