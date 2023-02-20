import {useState} from "react"
import { Link } from "react-router-dom";
import CardBox from "../components/CardBox";
import CardInfoForm from "../components/CardInfoForm";
import PageTitle from "../components/PageTitle";

import CardNumberInput from "../components/CardNumberInput";
import CardPasswordInput from "../components/CardPasswordInput";
import CardExpirationInput from "../components/CardExpirationInput";
import CardOwnerNameInput from "../components/CardOwnerNameInput";
import CardSecurityCodeInput from "../components/CardSecurityCodeInput";

import useCardNumber from "../hooks/useCardNumber";
import useCardExpiration from "../hooks/useCardExpiration";
import useCardOwnerName from "../hooks/useCardOwnerName";
import useSecurityCode from "../hooks/useSecurityCode";
import useCardPassword from "../hooks/useCardPassword";

// TODO : 실시간 state 갱신이 되는 제어 컴포넌트처럼 동작하려면 CardBox가 CardInfoForm 하위에 있어야하나?
// TODO : submit으로 상위 form에 값을 전달해야하는걸까? React 컴포넌트는 어떻게 동작해야 하지?

export default function AddCard() {
/*
  const [cardInfo, setCardInfo] = useState({
   cardNumber: cardNumber,
   cardExpiration: expiration,
   cardOwnerName: ownerName,
   cardSecurityCode: securityCode,
   cardPassword: password,
   cardNickName: "클린카드"
  });
*/
const [cardNumber, handleCardNumber] = useCardNumber();
const [cardExpiration, handleCardExpiration] = useCardExpiration();
const [cardOwnerName, handleCardOwnerName] = useCardOwnerName();
const [cardSecurityCode, handleCardSecurityCode] = useSecurityCode();
const [cardPassword, handleCardPassword] = useCardPassword();

  return (
    <>
      <PageTitle className="page-title">
        <Link className="button-text" to={`/AddedCardList`}>
          &lt;
        </Link>
        <span className="button-text">카드 추가</span>
      </PageTitle>
      <CardBox cardNumber={cardNumber}
          cardExpiration={cardExpiration}
          cardOwnerName={cardOwnerName}
      />      
      <CardNumberInput cardNumber={cardNumber} onChange={handleCardNumber}></CardNumberInput>
      <CardExpirationInput cardExpiration={cardExpiration} onChange={handleCardExpiration}></CardExpirationInput>
      <CardOwnerNameInput cardOwnerName={cardOwnerName} onChange={handleCardOwnerName}></CardOwnerNameInput>
      <CardSecurityCodeInput cardSecurityCode={cardSecurityCode} onChange={handleCardSecurityCode}></CardSecurityCodeInput>
      <CardPasswordInput cardPassword={cardPassword} onChange={handleCardPassword}/>

      <Link className="button-text" to={`/AddedCard`}>
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </Link>
    </>
  );
}
