import { Link } from "react-router-dom";
import CardBox from "../components/CardBox";

import { ROUTE_PATH } from "../constants/page";
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

export default function CardRegistrationPage() {
  // TODO : 모든 input이 제어 컴포넌트로 작성되었는데 form을 제어함에 있어서 언제 렌더가 이뤄져야하는지 고민
  // TODO : cardInfo는 useReducer & 비제어 컴포넌트로 관리
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

  // TODO : 페이지에서 공통적으로 사용될 법한 컴포넌트들을 Layout 과 같은 컴포넌트로 선언하고 재사용
  return (
    <>
      <h2 className="page-title">
        {/* TODO : form형태로 변경 
        // submit이벤트에서 전달받은 데이터들을 검증하고, 에러메시지를 도출해내거나, 유효한 데이터로 검증이 되었다면 이 검증된 데이터로 카드를 만들어볼 수 있을 것*/}
        <Link className="button-text" to={ROUTE_PATH.REGISTED_CARD_LIST}>
          &lt;
        </Link>
        <span className="button-text">카드 추가</span>
      </h2>
      <CardBox
        cardNumber={cardNumber}
        cardExpiration={cardExpiration}
        cardOwnerName={cardOwnerName}
      />
      <CardNumberInput
        cardNumber={cardNumber}
        onChange={handleCardNumber}
      ></CardNumberInput>
      <CardExpirationInput
        cardExpiration={cardExpiration}
        onChange={handleCardExpiration}
      ></CardExpirationInput>
      <CardOwnerNameInput
        cardOwnerName={cardOwnerName}
        onChange={handleCardOwnerName}
      ></CardOwnerNameInput>
      <CardSecurityCodeInput
        cardSecurityCode={cardSecurityCode}
        onChange={handleCardSecurityCode}
      ></CardSecurityCodeInput>
      <CardPasswordInput
        cardPassword={cardPassword}
        onChange={handleCardPassword}
      />

      <Link className="button-text" to={ROUTE_PATH.CARD_REGISTRATION_COMPLETED}>
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </Link>
    </>
  );
}
