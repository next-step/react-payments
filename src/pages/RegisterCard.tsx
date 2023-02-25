import { CardBox, Modal, PageTitle } from '../components';
import { useEffect, useState } from 'react';
import CardSelection from '../components/CardSelection';
import {
  CardHolderContainer,
  CardNumberContainer,
  CardPasswordContainer,
  ExpiredDateContainer,
  SecurityCodeContainer
} from '../container/RegisterCard';
import { Button } from '../components/form';
import { cardRepository } from '../repositories';
import { useNavigate } from 'react-router-dom';
import { ICardBoxDTO } from '../domain/types';
import useCardBoxContext from '../provider/card-box/useCardBox';

export interface IRegisterCard {
  onChange: (data: ICardBoxDTO) => void;
}

export default function RegisterCard() {
  const navigate = useNavigate();
  const [openCardPopup, setOpenCardPopup] = useState(false);
  const { cardState, setCardState } = useCardBoxContext();

  useEffect(() => {
    const { cardNumber, brand } = cardState;

    if (brand) {
      setOpenCardPopup(false);
      return;
    }
    if (cardNumber?.length) {
      setOpenCardPopup(true);
    }
  }, [cardState]);

  const moveCardList = () => navigate('/');
  const saveCardData = () => {
    const cardIndex = new Date().getTime();
    const cardList = cardRepository.getItem();
    const newCardList = [
      ...cardList,
      { ...cardState, index: cardIndex }
    ];

    cardRepository.setItem(newCardList);
    navigate(`/register-complete?card=${cardIndex}`);
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