import { usePayments } from "../../hooks/usePayments";
import CardForm from "./CardForm";
import CardList from "./CardList";
import Completed from "./Completed";

const Payments = () => {
  const { step, setStep, cardList, newCardInfo, handleCardInputChange } =
    usePayments();

  switch (step) {
    case 1:
      return (
        <CardForm
          newCardInfo={newCardInfo}
          setStep={setStep}
          handleCardInputChange={handleCardInputChange}
        />
      );
    case 2:
      return <Completed />;
    default:
      return <CardList cardList={cardList} setStep={setStep} />;
  }
};

export default Payments;
