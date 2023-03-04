import Card from "components/card";
import { SubWrapper, Wrapper } from "components/common/ui";
import Header from "components/header/header";
import CardForm from "components/input/CardForm";
import { useForm } from "components/input/hooks/useForm";
import AddCardModal from "components/modal/AddCardModal";

const Content = () => {
  const {
    cardNumbers,
    cardExpiration,
    cardOwnerName,
    cvc,
    password,
    cardCompany,
    isModalOpen,
    handleChangeCardNumber,
    handleChangeExpirationDate,
    handleCardOwner,
    handleCvc,
    handlePassword,
    handleCardSubmit,
    handleCardCompany,
  } = useForm();
  return (
    <>
      <Card
        cardNumbers={cardNumbers}
        cardExpiration={cardExpiration}
        cardOwnerName={cardOwnerName}
        cardCompany={cardCompany}
        size={"small"}
      />
      {isModalOpen && <AddCardModal handleCardCompany={handleCardCompany} />}
      <CardForm
        cardNumbers={cardNumbers}
        cardExpiration={cardExpiration}
        cardOwnerName={cardOwnerName}
        cvc={cvc}
        password={password}
        cardCompany={cardCompany}
        isModalOpen={isModalOpen}
        handleChangeCardNumber={handleChangeCardNumber}
        handleChangeExpirationDate={handleChangeExpirationDate}
        handleCardOwner={handleCardOwner}
        handleCvc={handleCvc}
        handlePassword={handlePassword}
        handleCardSubmit={handleCardSubmit}
        handleCardCompany={handleCardCompany}
      />
    </>
  );
};

const AddCardPage = () => {
  return (
    <Wrapper>
      <SubWrapper>
        <Header title="카드추가" />
        <Content />
      </SubWrapper>
    </Wrapper>
  );
};
export default AddCardPage;
