import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Card } from 'components/domain';
import { Button, Input } from 'components/common';

import { useCardDispatch } from 'contexts/CardContextProvider/hooks';

import { PATHS } from 'constants/router';
import { MAX_LENGTH } from 'constants/card';
import type { CardBaseProps, CardCompany } from 'types/card';

interface CardProps extends Omit<CardBaseProps, 'company'> {
  company: CardCompany;
}

function ConrimCard() {
  const [alias, setAlias] = useState('');
  const dispatch = useCardDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const card = location.state as CardProps;

  const handleChangeAlias: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setAlias(e.target.value);
  };

  const handleClickNextButton = () => {
    dispatch({ type: 'ADD_OR_UPDATE_CARD', payload: { ...card, alias } });

    navigate(PATHS.HOME, { replace: true });
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card {...card} />
      <div className="input-container flex-center w-100">
        <Input
          className="input-underline w-75"
          type="text"
          placeholder="카드 별칭 (선택)"
          value={alias}
          onChange={handleChangeAlias}
          maxLength={MAX_LENGTH.ALIAS}
        />
      </div>
      <div className="button-box mt-50">
        <Button fontSize={18} onClick={handleClickNextButton}>
          다음
        </Button>
      </div>
    </div>
  );
}

export default ConrimCard;
