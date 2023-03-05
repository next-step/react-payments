import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { initState, useCardDispatch } from '../context/CardContext';
import {
  useCardListDispatch,
  useCardListState,
} from '../context/CardListContext';

const CardRegisterComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const nicknameRef = useRef(null);
  const dispatchCardList = useCardListDispatch();
  const stateCardList = useCardListState();
  const dispatchCard = useCardDispatch();

  const registerNickname = () => {
    if (!nicknameRef.current) return;
    const nickNameCurrent = nicknameRef.current as HTMLInputElement;
    const currentCardIndex = stateCardList.length - 1;
    const updatedCardList = stateCardList.map((card, index) => {
      if (index === currentCardIndex) {
        return { ...card, nickname: nickNameCurrent.value ?? card.company };
      } else {
        return card;
      }
    });
    dispatchCardList(updatedCardList);
    navigate('/');
    dispatchCard({
      type: 'SET_INIT',
      digits: { digit1: '', digit2: '', digit3: '', digit4: '' },
      expire: '',
      name: '',
      cvc: '',
      passwords: { password1: '', password2: '' },
      company: '',
      nickname: '',
      createdDate: 0,
    });
  };

  useEffect(() => {
    if (!location?.state?.isComplete) {
      navigate('/');
    }
  }, [location]);

  return (
    <>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      {/* <CardPreview {...state} /> */}
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드 별칭 (선택)"
          maxLength={10}
          ref={nicknameRef}
        />
      </div>
      <Button text="확인" onClick={registerNickname} />
    </>
  );
};

export default CardRegisterComplete;
