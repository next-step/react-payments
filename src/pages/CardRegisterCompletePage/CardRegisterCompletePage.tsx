import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/Card/Card";
import SimpleButton from "../../components/SimpleButton/SimpleButton";
import { PATH } from "../../constants/route";
import usePendingCardSelector from "../../stores/card/hooks/usePendingCardSelector";
import { isCardFormFilled } from "../../utils/validations";
import Styled from "./CardRegisterComplete.styles";

const CardRegisterCompletePage = () => {
  const navigate = useNavigate();
  const pendingCard = usePendingCardSelector((state) => state);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    navigate(PATH.HOME);
  };

  useEffect(() => {
    if (!isCardFormFilled(pendingCard)) {
      setErrorMessage("추가된 카드가 없습니다.");
    }
  }, [pendingCard]);

  useEffect(() => {
    if (errorMessage !== "") {
      alert(errorMessage);
      navigate(PATH.HOME);
    }
  }, [errorMessage]);

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.H1>카드등록이 완료되었습니다.</Styled.H1>
      <Card
        size="BIG"
        cardNumber={pendingCard.cardNumber}
        cardType={pendingCard.cardType}
        userName={pendingCard.cardUserName}
        expiration={pendingCard.cardExpiration}
      />
      <Styled.CardNameInput />
      <SimpleButton>확인</SimpleButton>
    </Styled.Form>
  );
};

export default CardRegisterCompletePage;
