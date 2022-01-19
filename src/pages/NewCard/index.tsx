import { useState, useRef } from 'react';
import { INIT_CARD_STATE } from '@/constants/index';
import InputContainer from '@/components/Forms/InputContainer/InputContainer';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card/Card';
import CardNumberField from '@/pages/NewCard/CardNumberField';

const NewCard = () => {
  const [cardState, setCardState] = useState(INIT_CARD_STATE);

  return (
    <>
      <PageTitle className='mb-10'>{'< 카드 추가'}</PageTitle>
      <Card {...cardState} />
      <InputContainer title='카드번호'>
        <CardNumberField
          setCardState={(state) =>
            setCardState({ ...cardState, cardNumber: state })
          }
        />
      </InputContainer>
    </>
  );
};

export default NewCard;
