import Card from '@/components/card/Card';
import PageTitle from '@/components/common/page-title/PageTitle';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import CardForm from './components/card-form/CardForm';
import { useContext } from 'react';

const AddCard = () => {
  const { cardState } = useContext(CardInfoContext);
  return (
    <>
      <PageTitle>{'< 카드 추가'}</PageTitle>
      <Card {...cardState} />
      <CardForm />
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </>
  );
};

export default AddCard;
