import Card from '@/components/card/Card';
import PageTitle from '@/components/common/page-title/PageTitle';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import CardForm from './components/card-form/CardForm';
import { useContext } from 'react';
import { StepContext } from '@/provider/step-provider/StepProvider';
import Button from '@/components/common/button/Button';

const AddCard = () => {
  const { cardState } = useContext(CardInfoContext);
  const { navigate } = useContext(StepContext);

  const goToPage = () => {
    navigate('COMPLETE');
  };

  return (
    <>
      <PageTitle>
        <div onClick={goToPage}>{'< 카드 추가'}</div>
      </PageTitle>
      <Card {...cardState} />
      <CardForm />
      <div className="button-box mt-10">
        <Button
          type="button"
          className="button-text"
          style={{
            border: 'none',
            background: 'white',
          }}
        >
          다음
          {/* <span className="button-text">다음</span> */}
        </Button>
      </div>
    </>
  );
};

export default AddCard;
