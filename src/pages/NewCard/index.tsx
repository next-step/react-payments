import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { INIT_CARD_STATE } from '@/constants/index';
import { CardContext } from '@/context/cardContext';
import PageContainer from '@components/PageContainer';
import PageTitle from '@components/PageTitle';

import Button from '@components/Button';
import Card from '@components/Card';
import CardForm from '@/pages/NewCard/cardForm';

const NewCard = () => {
  const { cardState, setCardState } = useContext(CardContext);
  const navigate = useNavigate();

  const goListPage = () => {
    setCardState(INIT_CARD_STATE);
    navigate('../list');
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
      <CardForm />
    </PageContainer>
  );
};

export default NewCard;
