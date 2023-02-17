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
  };

  const handleExpiredDate = (expiredDate: string) => {
    console.log(cardState);
    setCardState({
      ...cardState,
      expiredDate,
    });
  };

  const handleCardHolder = (cardHolder: string) => {
    console.log(cardHolder);
    setCardState({
      ...cardState,
      cardHolder,
    });
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

      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
      <Modal open={openCardPopup}>
        <SelectCard/>
      </Modal>
    </div>
  );
}