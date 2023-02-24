import { Card } from '@/components/Common';
import CompleteForm from '@/components/Form/CompleteForm';
import { useCardForm } from '@/context/CardFormContext';

function Complete() {
  const value = useCardForm();
  return (
    <div>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
          </div>
          <Card
            isBig
            cardCompany=""
            cardOwner={value.cardOwner}
            cardNumber={{
              cardNumber1: value.cardNumber1,
              cardNumber2: value.cardNumber2,
              cardNumber3: value.cardNumber3,
              cardNumber4: value.cardNumber4,
            }}
            expiration={{
              year: value.year,
              month: value.month,
            }}
          />
          <CompleteForm />
        </div>
      </div>
    </div>
  );
}

export default Complete;
