import Card from "components/card";
import { SubWrapper, Wrapper } from "components/common/ui";
import Header from "components/header/header";
import CardForm from "components/input/CardForm";
import AddCardModal from "components/modal/AddCardModal";
import { usePayments } from "store/context";

const CardPreview = () => {
  const {
    cardNumbers,
    cardExpiration,
    cardOwnerName,
    isModalOpen,
    cardCompany,
    handleCardCompany,
  } = usePayments();

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
    </>
  );
};

const Content = () => {
  return (
    <>
      <CardPreview />
      <CardForm />
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
