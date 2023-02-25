import { useReducer } from "react";
import { Link } from "react-router-dom";
import CardBox from "../components/CardBox";

import { ROUTE_PATH } from "../constants/page";
import Header from "../components/Header";
import CardNumberInput from "../components/CardNumberInput";
import CardPasswordInput from "../components/CardPasswordInput";
import CardExpirationInput from "../components/CardExpirationInput";
import CardOwnerNameInput from "../components/CardOwnerNameInput";
import CardSecurityCodeInput from "../components/CardSecurityCodeInput";

import { isNumber } from "../utils/card";
import { MESSAGE } from "../constants/card";
import { CARD_OWNER_NAME } from "../constants/card";

// TODO : form형태로 변경
// TODO : error객체나 {success: boolean, errorMessage?: string} 과 같은 결과 객체를 반환
function reducer(state, action) {
  console.log(action, state);
  switch (action.type) {
    case "cardNumber": {
      const { name, value } = action.target;
      if (!isNumber(value)) {
        alert(MESSAGE.ALERT_NUMBER);
        return;
      }
      return {
        ...state,
        [action.type]: { ...state[action.type], [name]: value },
      };
    }
    case "cardExpiration": {
      const { name, value } = action.target;
      if (!isNumber(value)) {
        alert(MESSAGE.ALERT_NUMBER);
        return;
      }
      if (name == "month") {
        if (value > 12) {
          alert(MESSAGE.ALERT_EXP_MONTH);
          return;
        }
      } else {
        if (value > 31 || value === 0) {
          alert(MESSAGE.ALERT_EXP_YEAR);
          return;
        }
      }
      return {
        ...state,
        [action.type]: { ...state[action.type], [name]: value },
      };
    }
    case "cardOwnerName": {
      function isValidOwnerName(value) {
        if (value.length <= CARD_OWNER_NAME.MAX_LENGTH) {
          return true;
        }
        return false;
      }
      const { value } = action.target;
      if (isValidOwnerName(value)) {
        return { ...state, [action.type]: value };
      }
    }
    case "cardSecurityCode": {
      const { value } = action.target;
      if (!isNumber(value)) {
        alert(MESSAGE.ALERT_NUMBER);
        return;
      }
      return { ...state, [action.type]: value };
    }
    case "cardPassword": {
      const { name, value } = action.target;
      if (!isNumber(value)) {
        alert(MESSAGE.ALERT_NUMBER);
        return;
      }
      return {
        ...state,
        [action.type]: { ...state[action.type], [name]: value },
      };
    }
    default:
      throw new Error();
  }
}
export default function CardRegistrationPage() {
  const [state, dispatch] = useReducer(reducer, {
    cardNumber: {
      num0: "",
      num1: "",
      num2: "",
      num3: "",
    },
    cardExpiration: { month: "", year: "" },
    cardOwnerName: "",
    cardSecurityCode: "",
    cardPassword: { num0: "", num1: "", num2: "", num3: "" },
  });

  const {
    cardNumber,
    cardExpiration,
    cardOwnerName,
    cardSecurityCode,
    cardPassword,
  } = state;

  return (
    <>
      <Header className="page-title" routerPath={ROUTE_PATH.REGISTED_CARD_LIST}>
        &lt;카드 추가
      </Header>
      <CardBox
        cardNumber={cardNumber}
        cardExpiration={cardExpiration}
        cardOwnerName={cardOwnerName}
      />
      <CardNumberInput
        cardNumber={cardNumber}
        onChange={(e) => dispatch({ type: "cardNumber", target: e.target })}
      ></CardNumberInput>
      <CardExpirationInput
        cardExpiration={cardExpiration}
        onChange={(e) => dispatch({ type: "cardExpiration", target: e.target })}
      ></CardExpirationInput>
      <CardOwnerNameInput
        cardOwnerName={cardOwnerName}
        onChange={(e) => dispatch({ type: "cardOwnerName", target: e.target })}
      ></CardOwnerNameInput>
      <CardSecurityCodeInput
        cardSecurityCode={cardSecurityCode}
        onChange={(e) =>
          dispatch({ type: "cardSecurityCode", target: e.target })
        }
      ></CardSecurityCodeInput>
      <CardPasswordInput
        cardPassword={cardPassword}
        onChange={(e) => dispatch({ type: "cardPassword", target: e.target })}
      />

      <Link className="button-text" to={ROUTE_PATH.CARD_REGISTRATION_COMPLETED}>
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </Link>
    </>
  );
}
