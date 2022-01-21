import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INIT_CARD_STATE } from '@/constants/index';
import PageContainer from '@components/PageContainer';
import PageTitle from '@components/PageTitle';
import PageBottom, { PageBottomText } from '@components/PageBottom';
import Button from '@components/Button';
import { Card } from '@components/Card';
import CardForm from './cardForm';

const NewCard = () => {
  const navigate = useNavigate();
  const [cardState, setCardState] = useState({ ...INIT_CARD_STATE });

  const goListPage = () => navigate('/list');
  const goDonePage = () => navigate('/done');

  const changeCardState = (
    state: typeof INIT_CARD_STATE[keyof typeof INIT_CARD_STATE],
    key: keyof typeof INIT_CARD_STATE
  ) => {
    setCardState({ ...cardState, [key]: state });
  };

  return (
    <PageContainer className='flex-column'>
      <PageTitle className='mb-10'>
        <Button className='pr-5' onClick={goListPage}>
          {'<'}
        </Button>
        카드 추가
      </PageTitle>
      <Card {...cardState} />
      <CardForm cardState={cardState} changeCardState={changeCardState} />
      <PageBottom className='mt-auto'>
        <Button onClick={goDonePage}>
          <PageBottomText>다음</PageBottomText>
        </Button>
      </PageBottom>
    </PageContainer>
  );
};

export default NewCard;
