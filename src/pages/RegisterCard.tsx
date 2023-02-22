import { CardBox, Modal, PageTitle } from '../components';
import { useState } from 'react';
import { useCard } from '../hooks';
import CardSelection from '../components/CardSelection';
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
import { CardCompanyType } from '../domain/types';

export interface RegisterCardType {
  onChange: (value: string) => void;
}

export default function RegisterCard() {
  const navigate = useNavigate();
  const [openCardPopup, setOpenCardPopup] = useState(false);
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword, setCardPassword] = useState('');
  const { cardState, setCardState } = useCard();

  const moveCardList = () => navigate('/');

  const handleCardNumber = (cardNumber: string) => {
    setCardState({ cardNumber });

    if (cardNumber.length === 8) {
      setOpenCardPopup(true);
    }
  };

  const handleExpiredDate = (expiredDate: string) => {
    setCardState({ expiredDate });
  };

  const handleCardHolder = (cardHolder: string) => {
    setCardState({ cardHolder });
  };

  const handleCardCompany = (cardCompany: CardCompanyType) => {
    setCardState({ ...cardCompany });

    setOpenCardPopup(false);
  };

  const saveCardData = () => {
    const saveData = {
      ...cardState,
      securityCode,
      cardPassword,
    };

    const cardList = cardRepository.getItem();
    const newCardList = [
      ...cardList,
      saveData,
    ];

    cardRepository.setItem(newCardList);
    navigate(`/register-complete?card=${saveData.cardNumber}`);
  };

  return (
    <div className="app">
      <PageTitle title="&lt; 카드 추가" onClick={moveCardList}/>
      <CardBox {...cardState} />
      <CardNumberContainer onChange={handleCardNumber}/>
      <ExpiredDateContainer onChange={handleExpiredDate}/>
      <CardHolderContainer onChange={handleCardHolder}/>
      <SecurityCodeContainer onChange={setSecurityCode}/>
      <CardPasswordContainer onChange={setCardPassword}/>
      <Button onClick={saveCardData}>다음</Button>
      <Modal open={openCardPopup}>
        <CardSelection onChange={handleCardCompany}/>
      </Modal>
    </div>
  );
}