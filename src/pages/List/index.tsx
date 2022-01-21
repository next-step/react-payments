import { useNavigate } from 'react-router-dom';
import PageContainer from '@components/PageContainer';
import PageTitle from '@/components/PageTitle';
import { CardBoxEl, CardEl } from '@/components/Card';
import Button from '@/components/Button';

const List = () => {
  const navigate = useNavigate();

  return (
    <PageContainer className='flex-column-center'>
      <div className='flex-center'>
        <PageTitle className='mb-10'>보유 카드</PageTitle>
      </div>
      <CardBoxEl>
        <Button onClick={() => navigate('/new')} type='button'>
          <CardEl size='small'>+</CardEl>
        </Button>
      </CardBoxEl>
    </PageContainer>
  );
};

export default List;
