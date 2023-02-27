import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Card } from 'components/domain';
import { Button } from 'components/common';

import { PATHS } from 'constants/router';
import { MAX_LENGTH } from 'constants/card';
import type { CardBaseProps } from 'types/card';

function ConrimCard() {
  const [alias, setAlias] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const card = location.state as CardBaseProps;

  const handleChangeAlias: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setAlias(e.target.value);
  };

  const handleClickNextButton = () => {
    navigate(PATHS.HOME, { replace: true });
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card {...card} />
      <div className="input-container flex-center w-100">
        <input
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
