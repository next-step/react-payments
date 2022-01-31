import { useNavigate } from "react-router-dom";

import { PATH } from "../../constants/route";
import CardForm from "../../components/CardForm/CardForm";
import { CardFormField } from "../../@types";
import usePendingCardSelector from "../../stores/card/hooks/usePendingCardSelector";
import Styled from "./CardRegisterPage.styles";
import { isCardFormFilled } from "../../utils/validations";

const CardRegisterPage = () => {
  const navigate = useNavigate();
  const { cardNumber, cardType, cardUserName, cardExpiration } = usePendingCardSelector((state) => state);

  const handleCardFormSubmit = (formField: CardFormField) => {
    if (!isCardFormFilled(formField)) {
      alert("입력 폼을 모두 채워주세요");

      return;
    }

    navigate(PATH.CARD_REGISTER_COMPLETE);
  };

  return (
    <>
      <Styled.Header goBackLink={PATH.HOME}>카드추가</Styled.Header>
      <main>
        <Styled.Card
          cardNumber={cardNumber}
          cardType={cardType}
          userName={cardUserName}
          expiration={cardExpiration}
          size="SMALL"
        />
        <CardForm onSubmit={handleCardFormSubmit} />
      </main>
    </>
  );
};

export default CardRegisterPage;
