import { Link } from "react-router-dom";
import CardBox from "../components/CardBox";
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
