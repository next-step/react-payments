import Card from '@/components/card/Card';
import PageTitle from '@/components/common/page-title/PageTitle';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import CardForm from './components/card-form/CardForm';
import { useContext } from 'react';
import { StepContext } from '@/provider/step-provider/StepProvider';

const AddCard = () => {
  const { cardState } = useContext(CardInfoContext);
  const { navigate } = useContext(StepContext);

  return (
    <>
      <PageTitle>
        <div
          onClick={() => {
            navigate('LIST');
          }}
        >
          {'< 카드 추가'}
        </div>
      </PageTitle>
      <Card {...cardState} />
      <CardForm />
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </>
  );
};

export default AddCard;
