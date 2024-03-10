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

const MAX_LENGTH = 10;
const CardRegisterComplete = () => {
  const { addCard } = useContext(MyCardsContext);
  const { navigate } = useContext(StepContext);
  const { cardState, handleCardState } = useContext(CardInfoContext);

  const goToPage = () => {
    navigate('LIST');
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    handleCardState({ [name]: value });
  };
  return (
    <FlexCenter>
      <div className="mt-30">
        <PageTitle>카드 등록이 완료되었습니다.</PageTitle>
      </div>
      <div className="mt-10">
        <Card status="big" {...cardState} />
      </div>
      <div className="mb-10">
        <Input
          type="text"
          boxType="input-underline"
          name="nickname"
          placeholder="카드 별칭 (선택)"
          maxLength={MAX_LENGTH}
          onChange={handleChange}
        />
      </div>
      <ButtonBox className="mt-30 mb-10">
        <Button
          type="button"
          className="button-text"
          onClick={() => {
            addCard(cardState);
            goToPage();
          }}
          style={{
            border: 'none',
            background: 'white',
          }}
        >
          다음
        </Button>
      </ButtonBox>
    </FlexCenter>
  );
};

export default CardRegisterComplete;
