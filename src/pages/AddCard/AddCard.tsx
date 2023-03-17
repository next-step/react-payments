import { Card, ErrorMessage } from '@/components/Common';
import AddCardForm from '@/components/Form/AddCardForm';
import Layout from '@/components/Layout';
import { HEADER_TITLE } from '@/constants';
import { useCardForm } from '@/context/CardFormContext';
import { useCardFormValidator } from '@/context/CardFormValidator';
import { useModalContext } from '@/context/ModalContext';

function AddCard() {
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, cardOwner, cardCompany } = useCardForm();
  const { isValidCardCompanyForm } = useCardFormValidator();
  const { openModal } = useModalContext();

  const handleCompanyName = () => {
    openModal('cardCompanySelectModal');
  };

  console.log(cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, cardOwner, cardCompany);

  return (
    <Layout headerTitle={HEADER_TITLE.ADD_CARD} goBack="/">
      <Card
        onClick={handleCompanyName}
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
      <div className="flex items-center justify-center">
        {!isValidCardCompanyForm.isValid ? <ErrorMessage msg={isValidCardCompanyForm.msg} /> : null}
      </div>
      <AddCardForm />
    </Layout>
  );
}

export default AddCard;
