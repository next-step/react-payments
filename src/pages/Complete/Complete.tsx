import { Card } from '@/components/Common';
import { CompleteForm } from './components';
import Layout from '@/components/Layout';
import { useCardForm } from '@/context/CardFormContext';
import { useLocationState } from './hooks';
import { HEADER_TITLE } from '@/constants';

function Complete() {
  const { isEditMode } = useLocationState<{ isEditMode: boolean }>();
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, cardOwner, cardCompany } = useCardForm();

  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <h2 className="flex-[3] flex items-center justify-center">
          {isEditMode ? HEADER_TITLE.EDIT_CARD : HEADER_TITLE.COMPLETE}
        </h2>
        <div className="flex-[7]">
          <Card
            size="lg"
            cardCompany={cardCompany}
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
