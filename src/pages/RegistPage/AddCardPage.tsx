import Card from "components/card";
import Header from "components/header/header";
import CardForm from "components/input/CardForm";
import AddCardModal from "components/modal/AddCardModal";
import { PaymentsProvider } from "store/Provider";
import { usePayments } from "store/context";

const CardPreview = () => {
  const { cardNumbers, cardExpiration, cardOwnerName, isModalOpen } = usePayments();

  return (
    <>
      <Card
        cardNumbers={cardNumbers}
        cardExpiration={cardExpiration}
        cardOwnerName={cardOwnerName}
      />
      {isModalOpen && <AddCardModal />}
    </>
  );
};

const Content = () => {
  return (
    <PaymentsProvider>
      <CardPreview />
      <CardForm />
    </PaymentsProvider>
  );
};
const AddCardPage = () => {
  return (
    <div className="root">
      <div className="app">
        <Header title="카드추가" />
        <Content />
      </div>
    </div>
  );
};
export default AddCardPage;
