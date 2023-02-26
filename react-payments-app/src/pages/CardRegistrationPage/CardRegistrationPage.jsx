/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCard } from '../../store/CardContext';
import { MAX_INPUT_LENGTH } from '../../constants/numbers';

import Header from '../../components/common/Header/Header';
import Card from '../../components/domain/Card/Card';
import CardForm from '../../components/domain/CardForm/CardForm';

const CardRegistration = () => {
  const navigate = useNavigate();
  const { cardInfo } = useCard();
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
    // if (!isAllFilledOut(cardInfo)) {
    //   alert('빈칸을 모두 채워주세요.');
    //   return;
    // }
    // setCard(cardInfo);
    // navigate('/registration/setCardNickname');
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
        cardNumbers={cardInfo.cardNumbers}
        cardExpirationDate={cardInfo.cardExpirationDate}
        cardOwner={cardInfo.cardOwner}
      />
      <CardForm onSubmit={handleSubmit} onChange={handleChange} />
    </>
  );
};

export default CardRegistration;
