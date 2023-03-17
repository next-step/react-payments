import React from 'react';

import styled from '@emotion/styled';
import { COLOR } from '../../constant/color';
import { useModalState } from '../../context/ModalContext';
import CloseIcon from '../icon/CloseIcon';

const S = {
  Content: styled.div`
    position: relative;
    height: 100%;
  `,
  Title: styled.h2`
    margin-bottom: 30px;
    font-size: 20px;
    text-align: center;
  `,
  ImgWrap: styled.div`
    width: 150px;
    margin: 0 auto;
  `,
  IconWrap: styled.div`
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  `,
};

const ModalMessageTip = () => {
  const { setModalState } = useModalState();

  return (
    <S.Content>
      <S.IconWrap
        onClick={() =>
          setModalState({ type: 'MESSAGE_TOOLTIP', isShow: false })
        }
      >
        <CloseIcon color={COLOR.GREY_2} />
      </S.IconWrap>

      <S.ImgWrap>
        <img src={'/img/cvc.png'} alt={'cvc'} />
      </S.ImgWrap>
      <S.Title>카드 뒷면의 숫자 중 마지막 3자리를 확인해주세요.</S.Title>
    </S.Content>
  );
};

export default ModalMessageTip;
