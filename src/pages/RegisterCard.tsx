import { CardBox, Modal } from '../components';
import { useState } from 'react';
import { useCard } from '../hooks';
import { Filter } from '../domain';
import SelectCard from '../components/SelectCard';

import {
  CardHolderContainer,
  CardNumberContainer,
  CardPasswordContainer,
  ExpiredDateContainer,
  SecurityCodeContainer
} from '../container/RegisterCard';
import { Button } from '../components/form';

const { onlyNumber, onlyString } = Filter;

export interface RegisterCardType {
  filter?: (value: string) => string;
  onChange: (value: string) => void;
}

export default function RegisterCard() {
  const [openCardPopup, setOpenCardPopup] = useState(false);
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword, setCardPassword] = useState('');
  const { cardState, setCardState } = useCard({
    cardCompany: '',
    cardNumber: '',
    cardHolder: '',
    expiredDate: '',
    type: 'small',
  });

  const handleCardNumber = (cardNumber: string) => {
    setCardState({
      ...cardState,
      cardNumber,
    });

    if (cardNumber.length === 8) {
      setOpenCardPopup(true);
    }
  };

  const handleExpiredDate = (expiredDate: string) => {
    setCardState({
      ...cardState,
      expiredDate,
    });
  };

  const handleCardHolder = (cardHolder: string) => {
    setCardState({
      ...cardState,
      cardHolder,
    });
  };

  const handleCardCompany = ({ cardCompany, color }: object) => {
    setCardState({
      ...cardState,
      cardCompany,
      color,
    });

    setOpenCardPopup(false);
  };

  return (
    <div className="app">
      <h2 className="page-title">&lt; 카드 추가</h2>
      <CardBox {...cardState} />
      <CardNumberContainer filter={onlyNumber} onChange={handleCardNumber}/>
      <ExpiredDateContainer filter={onlyNumber} onChange={handleExpiredDate}/>
      <CardHolderContainer filter={onlyString} onChange={handleCardHolder}/>
      <SecurityCodeContainer filter={onlyNumber} onChange={setSecurityCode}/>
      <CardPasswordContainer filter={onlyNumber} onChange={setCardPassword}/>

      <Button>다음</Button>
      <Modal open={openCardPopup}>
        <SelectCard onChange={handleCardCompany}/>
      </Modal>
    </div>
  );
}