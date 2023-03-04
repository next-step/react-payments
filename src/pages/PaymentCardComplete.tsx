import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { useCardState } from '../context/CardContext';
import CardPreview from '../components/CardPreview';

const CardRegisterComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useCardState();

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
      <CardPreview {...state} />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드 별칭 (선택)"
          maxLength={10}
        />
      </div>
      <Button text={'확인'} onClick={() => navigate('/')} />
    </>
  );
};

export default CardRegisterComplete;
