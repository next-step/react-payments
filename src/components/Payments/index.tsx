import { usePayments } from "../../hooks/usePayments";
import CardForm from "./CardForm";
import CardList from "./CardList";
import Completed from "./Completed";

const Payments = () => {
  const {
    step,
    setStep,
    cardList,
    newCardInfo,
    clearCardInfo,
    handleCardInputChange,
    handleCardTypeClick,
    handleCardAddClick,
    handleCardNicknameAddClick,
  } = usePayments();

  switch (step) {
    case 1:
    case 2:
      return (
        <CardForm
          newCardInfo={newCardInfo}
          step={step}
          setStep={setStep}
          handleCardInputChange={handleCardInputChange}
          handleCardTypeClick={handleCardTypeClick}
          handleCardAddClick={handleCardAddClick}
        />
      );
    case 3:
      return (
        <Completed
          newCardInfo={newCardInfo}
          setStep={setStep}
          handleCardInputChange={handleCardInputChange}
          handleCardNicknameAddClick={handleCardNicknameAddClick}
        />
      );
    default:
      return (
        <CardList
          clearCardInfo={clearCardInfo}
          cardList={cardList}
          setStep={setStep}
        />
      );
  }
};

export default Payments;
