import { Card } from '@/components/Common';
import AddCardForm from '@/components/Form/AddCardForm';
import Layout from '@/components/Layout';
import { HEADER_TITLE } from '@/constants';
import { useCardForm } from '@/context/CardFormContext';
import { useModalContext } from '@/context/ModalContext';

function AddCard() {
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, cardOwner, cardCompany } = useCardForm();
  const { openModal } = useModalContext();

  const handleCompanyName = () => {
    openModal('cardCompanySelectModal');
  };

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
      <AddCardForm />
    </Layout>
  );
}

export default AddCard;
