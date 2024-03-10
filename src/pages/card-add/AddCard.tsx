import Card from '@/components/card/Card';
import PageTitle from '@/components/common/page-title/PageTitle';
import { CardInfoContext } from '@/provider/card-info-provider/CardInfoProvider';
import CardForm from './components/card-form/CardForm';
import { useContext } from 'react';
import { StepContext } from '@/provider/step-provider/StepProvider';
import Button from '@/components/common/button/Button';
import ButtonBox from '@/components/common/button-box/ButtonBox';

const AddCard = () => {
  const { cardState } = useContext(CardInfoContext);
  const { navigate } = useContext(StepContext);

  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <PageTitle>
        <div onClick={() => goToPage('LIST')}>{'< 카드 추가'}</div>
      </PageTitle>
      <Card {...cardState} />
      <CardForm />
      <ButtonBox className="mt-10">
        <Button
          type="button"
          onClick={() => goToPage('COMPLETE')}
          className="button-text button-border-none"
        >
          다음
        </Button>
      </ButtonBox>
    </>
  );
};

export default AddCard;
