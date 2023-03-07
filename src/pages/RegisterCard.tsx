import { Button, Card, PageTitle } from '../components/atoms';
import { CardSelection, Modal } from '../components/molecules';
import { useEffect, useState } from 'react';
import { CardHolder, CardNumber, CardPassword, ExpiredDate, SecurityCode } from '../components/organisms/register-card';
import { cardRepository } from '../repositories';
import { useNavigate } from 'react-router-dom';
import { useCardDispatch, useCardState } from '../provider/card/hooks';
import { invalidCard } from '../domain/validator';
import { ICard } from '../domain/types';
import { VALIDATE_MESSAGE } from '../constants';

export default function RegisterCard() {
  const cardState = useCardState();
  const cardDispatch = useCardDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const { cardNumber, cardCompany } = cardState;

    if (cardCompany) {
      setShowModal(false);
      return;
    }
    if (cardNumber?.length) {
      setShowModal(true);
    }
  }, [cardState]);

  const moveCardList = () => navigate('/');
  const handleClickOutside = () => {
    setShowModal(false);
  };
  const handleCardCompany = (company) => {
    cardDispatch({ type: 'SET_CARD', payload: company });
  };
  const saveCardData = () => {
    const invalidMessage = invalidCard(cardState);

    if (invalidMessage) {
      alert(invalidMessage);
      return;
    }

    const cardList: ICard[] = cardRepository.getItem();
    const findDuplicateCard = cardList.find((item) => item.cardNumber === cardState.cardNumber);

    if (findDuplicateCard) {
      alert(VALIDATE_MESSAGE.DUPLICATE_CARD);
      return;
    }

    const newCardList = [
      ...cardList,
      { ...cardState }
    ];

    cardRepository.setItem(newCardList);
    cardDispatch({ type: 'RESET_CARD', payload: {} });
    navigate(`/register-complete?card=${cardState.cardNumber}`);
  };

  return (
    <div className="app">
      <PageTitle title="&lt; 카드 추가" onClick={moveCardList}/>
      <Card {...cardState} />
      <CardNumber/>
      <ExpiredDate/>
      <CardHolder/>
      <SecurityCode/>
      <CardPassword/>
      <Button onClick={saveCardData}>다음</Button>
      {showModal && (
        <Modal onClickOutside={handleClickOutside}>
          <CardSelection onChange={handleCardCompany}/>
        </Modal>
      )}
    </div>
  );
}
