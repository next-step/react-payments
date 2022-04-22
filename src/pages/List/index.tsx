import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CardContext } from '@/context/cardContext';
import PageContainer from '@components/PageContainer';
import PageTitle from '@/components/PageTitle';
import Card, { CardBoxEl, CardEl, CardItemWrap } from '@/components/Card';
import Button from '@/components/Button';

const List = () => {
  const navigate = useNavigate();
  const { cardList, setCardList } = useContext(CardContext);

  const deleteCard = (cardId: number) =>
    setCardList(cardList.filter((v) => v.id !== cardId));

  return (
    <PageContainer className='flex-column-center'>
      <div className='flex-center'>
        <PageTitle className='mb-10'>보유 카드</PageTitle>
      </div>
      {cardList.map((v) => (
        <CardItemWrap key={`card${v.id}`}>
          <Link to={`../edit/${v.id}`}>
            <Card {...v} />
          </Link>
          <div className='card-nickname'>{v.nickname}</div>
          <Button
            type='button'
            className='btn-delete'
            onClick={() => {
              if (window.confirm(`${v.nickname}를 삭제하시겠습니까?`)) {
                deleteCard(v.id);
              }
            }}
          >
            삭제
          </Button>
        </CardItemWrap>
      ))}
      <CardBoxEl>
        <CardEl
          size='small'
          onClick={() => navigate('../new')}
          type='button'
          as='button'
        >
          +
        </CardEl>
      </CardBoxEl>
    </PageContainer>
  );
};

export default List;
