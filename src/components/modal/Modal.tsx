import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { COLOR } from '../../constant/color';
import { ModalType, useModalState } from '../../context/ModalContext';
import ModalSelectCompany from './ModalSelectCompany';
import ModalManageCard from './ModalManageCard';
const S = {
  ModalDimmed: styled.div<{ isShow: IModal['isShow'] }>`
    display: ${(props) => (props.isShow ? 'block' : 'none')};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${COLOR.BLACK};
    opacity: 0.5;
  `,
  Modal: styled.div<{ isShow: IModal['isShow'] }>`
    position: fixed;
    bottom: 0;
    left: 50%;
    right: 0;
    width: 100%;
    max-width: 500px;
    height: 227px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: ${COLOR.WHITE};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.isShow ? 'translate3d(-50%, 0, 0)' : 'translate3d(-50%, 100%, 0)'};
  `,

  Content: styled.div`
    height: 100%;
    padding: 20px 53px;
  `,
};
interface IModal {
  isShow: boolean;
  children: ReactNode;
}

const Modal = () => {
  const {
    modalState: { isShow, type },
    setModalState,
  } = useModalState();

  const getModalContent = (type: ModalType | null) => {
    switch (type) {
      case 'SELECT_COMPANY':
        return <ModalSelectCompany />;
      case 'MANAGE_CARD':
        return <ModalManageCard />;
      default:
        return null;
    }
  };

  return (
    <>
      <S.ModalDimmed
        isShow={isShow}
        onClick={() => setModalState({ type: null, isShow: false })}
      />
      <S.Modal isShow={isShow}>
        <S.Content>{getModalContent(type)}</S.Content>
      </S.Modal>
    </>
  );
};

export default Modal;
