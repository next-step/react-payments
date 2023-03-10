import React, { ReactNode, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { COLOR } from '../../constant/color';
const S = {
  Modal: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  Dimmed: styled.div<{ isShow: IModal['isShow'] }>`
    display: ${(props) => (props.isShow ? 'block' : 'none')};
    width: 100%;
    height: 100%;
    background-color: ${COLOR.BLACK};
    opacity: 0.5;
  `,
  Content: styled.div<{ isShow: IModal['isShow'] }>`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 227px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: ${COLOR.WHITE};
    transition: transform 0.5s ease;
    transform: ${(props) =>
      props.isShow ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)'};
  `,
};
interface IModal {
  isShow: boolean;
  children: ReactNode;
}
const Modal = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <S.Modal>
      <S.Dimmed isShow={isShow} />
      <S.Content isShow={isShow}></S.Content>
    </S.Modal>
  );
};

export default Modal;
