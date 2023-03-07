import { Button, Card, PageTitle } from '../components/atoms';
import { Modal } from '../components/molecules';
import { useEffect, useState } from 'react';
import CardSelection from '../components/molecules/card-selection';
import { CardHolder, CardNumber, CardPassword, ExpiredDate, SecurityCode } from '../components/organisms/register-card';
import { cardRepository } from '../repositories';
import { useNavigate } from 'react-router-dom';
import useCardState from '../provider/card-box/hooks/useCardState';
import useCardDispatch from '../provider/card-box/hooks/useCardDispatch';

export default function RegisterCard() {
  const cardState = useCardState();
  const cardDispatch = useCardDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const { cardNumber, brand } = cardState;

    if (brand) {
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
