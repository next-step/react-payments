import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import Button from '../components/common/Button';
import { useCardDispatch, useCardState } from '../context/CardContext';
import {
  useCardListDispatch,
  useCardListState,
} from '../context/CardListContext';
import { ROUTE } from '../constant/route';

const S = {
  ButtonWrapper: styled.div`
    text-align: right;
  `,
};

const CardRegisterComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const nicknameRef = useRef(null);
  const { updateNickname } = useCardListDispatch();
  const stateCardList = useCardListState();
  const dispatchCard = useCardDispatch();
  const state = useCardState();

  const registerNickname = () => {
    if (!nicknameRef.current) return;
    const nickNameValue = (nicknameRef.current as HTMLInputElement).value;
    const currentIdx = stateCardList.length - 1;
    updateNickname(currentIdx, nickNameValue);

    navigate(ROUTE.HOME);

    dispatchCard({
      type: 'INIT',
    });
  };

  useEffect(() => {
    if (!location?.state?.isComplete) {
      navigate(ROUTE.HOME);
    }
  }, [location]);

  return (
    <>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <CardPreview {...state} isSizeBig={true} />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드 별칭 (선택)"
          maxLength={10}
          ref={nicknameRef}
        />
      </div>
      <S.ButtonWrapper>
        <Button text="확인" onClick={registerNickname} />
      </S.ButtonWrapper>
    </>
  );
};

export default CardRegisterComplete;
