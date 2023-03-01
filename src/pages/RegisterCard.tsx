import { CardBox, Modal, PageTitle } from '../components';
import { useEffect } from 'react';
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
import { useCardBoxContext } from '../provider/card-box';
import { useModalContext } from '../provider/modal';

export default function RegisterCard() {
  const navigate = useNavigate();
  const { showModal } = useModalContext();
  const { cardState, setCardState } = useCardBoxContext();

  useEffect(() => {
    const { cardNumber, brand } = cardState;

    if (brand) {
      showModal(false);
      return;
    }
    if (cardNumber?.length) {
      showModal(true);
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
      <CardNumberContainer/>
      <ExpiredDateContainer/>
      <CardHolderContainer/>
      <SecurityCodeContainer/>
      <CardPasswordContainer/>
      <Button onClick={saveCardData}>다음</Button>
      <Modal>
        <CardSelection onChange={setCardState}/>
      </Modal>
    </div>
  );
}