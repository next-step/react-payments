/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCard } from '../../store/CardContext';


import Header from '../../components/common/Header/Header';
import Card from '../../components/domain/Card/Card';
import CardForm from '../../components/domain/CardForm/CardForm';
import CompanySelectionModal from '../../components/domain/Modal/CompanySelectionModal';

const CardRegistrationPage = () => {
  const navigate = useNavigate();
  const { cardInfo } = useCard();

  const [isModalOpen, setIsModalOpen] = useState(false);


  const goBackToListPage = (e) => {
    navigate('/');
  };

  const handleCardClick = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      <Header
        pageTitle={'카드추가'}
        headerIcon={'<'}
        onClick={goBackToListPage}
      />
      <Card
        cardNumbers={cardInfo.cardNumbers}
        cardExpirationDate={cardInfo.cardExpirationDate}
        cardOwner={cardInfo.cardOwner}
        onClick={handleCardClick}
      />
      <CardForm />
      {isModalOpen && <CompanySelectionModal />}
    </>
  );
};

export default CardRegistrationPage;
