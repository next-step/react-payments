import { usePayments } from "hooks/usePayments";
import CardForm from "components/Payments/CardForm";
import CardList from "components/Payments/CardList";
import Completed from "components/Payments/Completed";
import { STEP } from "../../constants/Payments";

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
    case STEP.SECOND:
    case STEP.THIRD:
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
    case STEP.FOURTH:
      return (
        <Completed
          newCardInfo={newCardInfo}
          setStep={setStep}
          handleCardInputChange={handleCardInputChange}
          handleCardNicknameAddClick={handleCardNicknameAddClick}
        />
      );
    case STEP.FIRST:
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
