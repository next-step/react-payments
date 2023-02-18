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
import { cardRepository } from '../repository';
import { useNavigate } from 'react-router-dom';

export interface RegisterCardType {
  filter?: (value: string) => string;
  onChange: (value: string) => void;
}

export default function RegisterCard() {
  const { filterOnlyNumber, filterOnlyString } = Filter();
  const navigate = useNavigate();
  const [openCardPopup, setOpenCardPopup] = useState(false);
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword, setCardPassword] = useState('');
  const { cardState, setCardState } = useCard({
    cardCompany: '',
    cardNumber: '',
    cardHolder: '',
    expiredDate: '',
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

  const handleCardCompany = (cardCompany: object) => {
    setCardState({
      ...cardState,
      ...cardCompany,
    });

    setOpenCardPopup(false);
  };

  const saveCardData = () => {
    const saveData = {
      ...cardState,
      securityCode,
      cardPassword,
    };

    const cardList = cardRepository.getItem() || [];
    const newCardList = [
      ...cardList,
      saveData,
    ];

    cardRepository.setItem(newCardList);
    navigate(`/register-complete?card=${saveData.cardNumber}`);
  };

  return (
    <div className="app">
      <h2 className="page-title">&lt; 카드 추가</h2>
      <CardBox {...cardState} />
      <CardNumberContainer filter={filterOnlyNumber} onChange={handleCardNumber}/>
      <ExpiredDateContainer filter={filterOnlyNumber} onChange={handleExpiredDate}/>
      <CardHolderContainer filter={filterOnlyString} onChange={handleCardHolder}/>
      <SecurityCodeContainer filter={filterOnlyNumber} onChange={setSecurityCode}/>
      <CardPasswordContainer filter={filterOnlyNumber} onChange={setCardPassword}/>
      <Button onClick={saveCardData}>다음</Button>
      <Modal open={openCardPopup}>
        <SelectCard onChange={handleCardCompany}/>
      </Modal>
    </div>
  );
}