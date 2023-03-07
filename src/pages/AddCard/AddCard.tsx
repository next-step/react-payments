import { Card } from '@/components/Common';
import AddCardForm from '@/components/Form/AddCardForm';
import Layout from '@/components/Layout';
import { HEADER_TITLE } from '@/constants';
import { useCardForm } from '@/context/CardFormContext';

function AddCard() {
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, cardOwner } = useCardForm();

  return (
    <Layout headerTitle={HEADER_TITLE.ADD_CARD} goBack="/">
      <Card
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
      <AddCardForm />
    </Layout>
  );
}

export default AddCard;
