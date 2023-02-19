/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCard } from '../../store/CardContext';
import { MAX_INPUT_LENGTH } from '../../common/constant';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import CardForm from '../../components/Input/CardForm';

const CardRegistration = () => {
  const navigate = useNavigate();
  const { card, setCard } = useCard();
  const [cardNumbers, setCardNumbers] = useState([]);
  const [cardExpirationDate, setCardExpirationDate] = useState([]);
  const [cardOwner, setCardOwner] = useState([]);
  const [cardCVC, setCardCVC] = useState([]);
  const [cardPassword, setCardPassword] = useState([]);

  const goBackToListPage = (e) => {
    navigate('/');
  };

  const isAllFilledOut = (cardInfo) => {
    const { cardNumbers, cardExpirationDate, cardPassword, cardCVC } = cardInfo;

    return (
      cardCVC.length === MAX_INPUT_LENGTH.CVC &&
      cardNumbers.every(
        (part) => part.length === MAX_INPUT_LENGTH.CARD_NUMBER
      ) &&
      cardExpirationDate.every(
        (part) => part.length === MAX_INPUT_LENGTH.DATE
      ) &&
      cardPassword.every((part) => part.length === MAX_INPUT_LENGTH.PW)
    );
  };

  const handleSubmit = (cardInfo) => {
    if (!isAllFilledOut(cardInfo)) {
      alert('빈칸을 모두 채워주세요.');
      return;
    }
    setCard(cardInfo);
    navigate('/registration/setCardNickname');
  };

  const handleChange = (inputInfo) => {
    const {
      cardNumbers,
      cardExpirationDate,
      cardOwner,
      cardCVC,
      cardPassword,
    } = inputInfo;

    if (inputInfo) {
      setCardNumbers(cardNumbers);
      setCardExpirationDate(cardExpirationDate);
      setCardOwner(cardOwner);
      setCardCVC(cardCVC);
      setCardPassword(cardPassword);
    }
  };
  return (
    <>
      <Header
        pageTitle={'카드추가'}
        headerIcon={'<'}
        onClick={goBackToListPage}
      />
      <Card
        cardStatus={'empty-card'}
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
        cardOwner={cardOwner}
      />
      <CardForm onSubmit={handleSubmit} onChange={handleChange} />
    </>
  );
};

export default CardRegistration;
