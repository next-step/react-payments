import { CardBox, Modal, PageTitle } from '../components';
import { useEffect, useState } from 'react';
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
import { ICardBox } from '../domain/types';

export interface IRegisterCard {
  onChange: (data: ICardBox) => void;
}

export default function RegisterCard() {
  const navigate = useNavigate();
  const [openCardPopup, setOpenCardPopup] = useState(false);
  const { cardState, setCardState } = useCard();

  useEffect(() => {
    const { cardNumber, brand } = cardState;
    if (cardNumber?.length === 8) {
      setOpenCardPopup(true);
    }

    if (brand) {
      setOpenCardPopup(false);
    }
  }, [cardState]);

  const moveCardList = () => navigate('/');
  const saveCardData = () => {
    const cardList = cardRepository.getItem();
    const newCardList = [
      ...cardList,
      { ...cardState }
    ];

    cardRepository.setItem(newCardList);
    navigate(`/register-complete?card=${cardState.cardNumber}`);
  };

  return (
    <div className="app">
      <PageTitle title="&lt; 카드 추가" onClick={moveCardList}/>
      <CardBox {...cardState} />
      <CardNumberContainer onChange={setCardState}/>
      <ExpiredDateContainer onChange={setCardState}/>
      <CardHolderContainer onChange={setCardState}/>
      <SecurityCodeContainer onChange={setCardState}/>
      <CardPasswordContainer onChange={setCardState}/>
      <Button onClick={saveCardData}>다음</Button>
      <Modal open={openCardPopup}>
        <CardSelection onChange={setCardState}/>
      </Modal>
    </div>
  );
}