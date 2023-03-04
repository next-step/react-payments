import { useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Card } from '../components';
import { CreditCard, PaymentsContext } from '../context/PaymentsContext';

const CardAdded = () => {
  const navigate = useNavigate();
  const aliasRef = useRef<HTMLInputElement>(null);

  const location = useLocation();
  const newCard: CreditCard = location.state;

  const { updateAlias } = useContext(PaymentsContext);

  const addedAlias = () => {
    if (aliasRef.current) {
      updateAlias(newCard.id, aliasRef.current.value);
    }
    navigate('/card-list');
  };

  return (
    <section className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card {...newCard} />
      <div className="input-container flex-center w-100">
        <input
          ref={aliasRef}
          maxLength={ALIAS_MAX_LENGTH}
          className="input-underline w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
          value={newCard?.alias}
        />
      </div>
      <div className="button-box mt-50">
        <Button onClick={addedAlias}>다음</Button>
      </div>
    </section>
  );
};

export default CardAdded;

const ALIAS_MAX_LENGTH = 10;
