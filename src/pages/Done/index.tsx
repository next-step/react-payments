import { useContext, useRef } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { NICKNAME, INPUT_LENGTH, INIT_CARD_STATE } from '@/constants/index';
import { CardContext } from '@/context/cardContext';
import PageContainer from '@components/PageContainer';
import PageTitle from '@/components/PageTitle';
import PageBottom, { PageBottomText } from '@components/PageBottom';
import Button from '@components/Button';
import Card from '@/components/Card';
import Input from '@components/Forms/Input';
import InputContainer from '@/components/Forms/InputContainer';

const Done = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { setCardState, cardList, setCardList } = useContext(CardContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const foundCardIndex = cardList.findIndex((v) => v.id === Number(id));

  const doneAddCard = () => {
    setCardList(
      cardList.map((v, i) =>
        i === foundCardIndex
          ? { ...v, [NICKNAME]: inputRef.current?.value || v.company }
          : v
      )
    );
    setCardState(INIT_CARD_STATE);
    navigate('../list');
  };

  return (
    <PageContainer className='flex-column-center'>
      <div className='flex-center'>
        <PageTitle className='mb-10'>
          {pathname.includes('done')
            ? '카드등록이 완료되었습니다.'
            : '카드의 별칭 수정 ✏️'}
        </PageTitle>
      </div>
      <Card size='big' {...cardList[foundCardIndex]} />
      <InputContainer className='flex-center w-100'>
        <Input
          className='w-75'
          variant='underline'
          data-id={NICKNAME}
          maxLength={INPUT_LENGTH[NICKNAME]}
          defaultValue={
            foundCardIndex >= 0 ? cardList[foundCardIndex][NICKNAME] : ''
          }
          placeholder='카드의 별칭을 입력해주세요.'
          ref={inputRef}
        />
      </InputContainer>
      <PageBottom className='mt-50'>
        <Button onClick={doneAddCard}>
          <PageBottomText>확인</PageBottomText>
        </Button>
      </PageBottom>
    </PageContainer>
  );
};

export default Done;
