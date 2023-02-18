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
import Repository from '../core/Repository';
import { useNavigate } from 'react-router-dom';
import { CARD_REPOSITORY } from '../constants';

const { onlyNumber, onlyString } = Filter;

export interface RegisterCardType {
  filter?: (value: string) => string;
  onChange: (value: string) => void;
}

export default function RegisterCard() {
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

    const cardList = Repository.get(CARD_REPOSITORY) || [];
    const newCardList = [
      ...cardList,
      saveData,
    ];

    Repository.set(CARD_REPOSITORY, newCardList);
    navigate(`/register-complete?card=${saveData.cardNumber}`);
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
      <Button onClick={saveCardData}>다음</Button>
      <Modal open={openCardPopup}>
        <SelectCard onChange={handleCardCompany}/>
      </Modal>
    </div>
  );
}