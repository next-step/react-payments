import Card from '@/components/card/Card';
import FlexCenter from '@/components/common/flex-center/FlexCenter';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import PageTitle from '@/components/common/page-title/PageTitle';
import { CardInfoContext } from '@/provider/card-info-provider/CardInfoProvider';
import { MyCardsContext } from '@/provider/my-cards-provider/MyCardsProvider';
import { StepContext } from '@/provider/step-provider/StepProvider';
import { ChangeEvent, useContext } from 'react';
import ButtonBox from '@/components/common/button-box/ButtonBox';
import Container from '@/components/common/input-container/Container';

const MAX_LENGTH = 10;
const CardRegisterComplete = () => {
  const { addCard } = useContext(MyCardsContext);
  const { navigate } = useContext(StepContext);
  const { cardState, handleCardState, reset } = useContext(CardInfoContext);

  const goToPage = () => {
    reset();
    navigate('LIST');
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    handleCardState({ [name]: value });
  };

  return (
    <div className="app flex-column-center">
      <FlexCenter>
        <PageTitle className="mb-10">카드 등록이 완료되었습니다.</PageTitle>
      </FlexCenter>
      <Card status="big" {...cardState} />
      <Container className="flex-center w-100">
        <Input
          type="text"
          boxType="input-underline"
          className="w-75"
          name="nickname"
          placeholder="카드 별칭 (선택)"
          maxLength={MAX_LENGTH}
          onChange={handleChange}
        />
      </Container>
      <ButtonBox className="mt-50">
        <Button
          type="button"
          onClick={() => {
            addCard(cardState);
            goToPage();
          }}
          style={{
            border: 'none',
            background: 'white',
          }}
        >
          <span className="button-text">다음</span>
        </Button>
      </ButtonBox>
    </div>
  );
};

export default CardRegisterComplete;
