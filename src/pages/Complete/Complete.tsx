import { Card } from '@/components/Common';
import CompleteForm from '@/components/Form/CompleteForm';
import Layout from '@/components/Layout';
import { useCardList } from '@/context/CardListContext';
import { useParams } from 'react-router-dom';

function Complete() {
  const { id } = useParams();

  const card = useCardList();
  const targetCard = card.find(card => card.id === id);

  return (
    <Layout>
      <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      <Card
        isBig
        cardCompany=""
        cardOwner={targetCard?.cardOwner ?? ''}
        cardNumber={{
          cardNumber1: targetCard?.cardNumber1 ?? '',
          cardNumber2: targetCard?.cardNumber2 ?? '',
          cardNumber3: targetCard?.cardNumber3 ?? '',
          cardNumber4: targetCard?.cardNumber4 ?? '',
        }}
        expiration={{
          year: targetCard?.year ?? '',
          month: targetCard?.month ?? '',
        }}
      />
      <CompleteForm />
    </Layout>
  );
}

export default Complete;
