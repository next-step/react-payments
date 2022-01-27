import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INIT_CARD_STATE } from '@/constants/index';
import PageContainer from '@components/PageContainer';
import PageTitle from '@components/PageTitle';
import PageBottom, { PageBottomText } from '@components/PageBottom';
import Button from '@components/Button';
import { Card } from '@components/Card';
import CardForm from '@/pages/NewCard/cardForm';
import { changeCardStateType } from '@/pages/NewCard/type';

const NewCard = () => {
  const navigate = useNavigate();

  const [cardState, setCardState] = useState({ ...INIT_CARD_STATE });

  const goListPage = () => navigate('../list');
  const goDonePage = () => navigate('../done');

  const changeCardState: changeCardStateType = (newState) => {
    setCardState({ ...cardState, ...newState });
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
