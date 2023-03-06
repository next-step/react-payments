import { Card } from '@/components/Common';
import { CompleteForm } from './components';
import Layout from '@/components/Layout';
import { useCardForm } from '@/context/CardFormContext';

function Complete() {
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, cardOwner } = useCardForm();

  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <h2 className="flex-[3] flex items-center justify-center">카드등록이 완료되었습니다.</h2>
        <div className="flex-[7]">
          <Card
            size="lg"
            cardCompany=""
            cardOwner={cardOwner}
            cardNumber={{
              cardNumber1,
              cardNumber2,
              cardNumber3,
              cardNumber4,
            }}
            expiration={{
              year,
              month,
            }}
          />
          <CompleteForm />
        </div>
      </div>
    </Layout>
  );
}

export default Complete;
