import { usePayments } from "../../hooks/usePayments";
import CardForm from "./CardForm";
import CardList from "./CardList";
import Completed from "./Completed";

const Payments = () => {
  const { step, setStep } = usePayments();

  switch (step) {
    case 1:
      return <CardForm />;
    case 2:
      return <Completed />;
    default:
      return <CardList setStep={setStep} />;
  }
};

export default Payments;
