import { useState, useRef } from 'react';
import { INIT_CARD_STATE } from '@/constants/index';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card/Card';
import CardForm from './cardForm';

const NewCard = () => {
  const [cardState, setCardState] = useState({ ...INIT_CARD_STATE });

  const changeCardState = (
    state: typeof INIT_CARD_STATE[keyof typeof INIT_CARD_STATE],
    key: keyof typeof INIT_CARD_STATE
  ) => {
    setCardState({ ...cardState, [key]: state });
  };

  return (
    <>
      <PageTitle className='mb-10'>{'< 카드 추가'}</PageTitle>
      <Card {...cardState} />
      <CardForm cardState={cardState} changeCardState={changeCardState} />
    </>
  );
};

export default NewCard;
