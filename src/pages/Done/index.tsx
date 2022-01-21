import { useNavigate } from 'react-router-dom';
import { NICKNAME, INPUT_LENGTH } from '@/constants/index';
import PageContainer from '@components/PageContainer';
import PageTitle from '@/components/PageTitle';
import PageBottom, { PageBottomText } from '@components/PageBottom';
import Button from '@components/Button';
import { Card } from '@/components/Card';
import { Input } from '@components/Forms/Input';
import InputContainer from '@/components/Forms/InputContainer';

const Done = () => {
  const navigate = useNavigate();

  return (
    <PageContainer className='flex-column-center'>
      <div className='flex-center'>
        <PageTitle className='mb-10'>카드등록이 완료되었습니다.</PageTitle>
      </div>
      <Card size='big' />
      <InputContainer className='flex-center w-100'>
        <Input
          className='w-75'
          variant='underline'
          data-id={NICKNAME}
          maxLength={INPUT_LENGTH[NICKNAME]}
          defaultValue=''
          placeholder='카드의 별칭을 입력해주세요.'
        />
      </InputContainer>
      <PageBottom className='mt-50'>
        <Button onClick={() => navigate('/list')}>
          <PageBottomText>다음</PageBottomText>
        </Button>
      </PageBottom>
    </PageContainer>
  );
};

export default Done;
