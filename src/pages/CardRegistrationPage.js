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
function reducer(state, action) {
  switch (action.type) {
    case "cardNumber": {
      const { name, value } = action.target;
      return {
        ...state,
        [action.type]: { ...state[action.type], [name]: value },
      };
    }
    case "cardExpiration": {
      const { name, value } = action.target;
      return {
        ...state,
        [action.type]: { ...state[action.type], [name]: value },
      };
    }
    case "cardOwnerName": {
      const { value } = action.target;
      return { ...state, [action.type]: value };
    }
    case "cardSecurityCode": {
      const { value } = action.target;
      return { ...state, [action.type]: value };
    }
    case "cardPassword": {
      const { name, value } = action.target;
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
      <Header
        className="page-title"
        linkToPath={ROUTE_PATH.REGISTED_CARD_LIST}
        linkText="&lt;"
      >
        카드 추가
      </Header>
      <CardBox
        cardNumber={cardNumber}
        cardExpiration={cardExpiration}
        cardOwnerName={cardOwnerName}
      />
      <CardNumberInput
        cardNumber={cardNumber}
        onChange={(e) => {
          if (!isNumber(e.target.value))
            return { success: false, errorMessage: MESSAGE.ALERT_NUMBER };
          dispatch({ type: "cardNumber", target: e.target });
        }}
      ></CardNumberInput>
      <CardExpirationInput
        cardExpiration={cardExpiration}
        onChange={(e) => {
          const { name, value } = e.target;
          if (!isNumber(value))
            return { success: false, errorMessage: MESSAGE.ALERT_NUMBER };
          if (name === "month") {
            if (value > 12) {
              return { success: false, errorMessage: MESSAGE.ALERT_EXP_MONTH };
            }
          } else if (name === "year") {
            if (value > 31 || value === 0) {
              return { success: false, errorMessage: MESSAGE.ALERT_EXP_YEAR };
            }
          }
          dispatch({ type: "cardExpiration", target: e.target });
        }}
      ></CardExpirationInput>
      <CardOwnerNameInput
        cardOwnerName={cardOwnerName}
        onChange={(e) => {
          const { value } = e.target;
          function isValidOwnerName(value) {
            if (value.length <= CARD_OWNER_NAME.MAX_LENGTH) {
              return true;
            }
            return false;
          }
          if (!isValidOwnerName(value)) {
            return {
              success: false,
              errorMessage: MESSAGE.ALERT_OWNERNAME_MAXLENGTH,
            };
          }
          dispatch({ type: "cardOwnerName", target: e.target });
        }}
      ></CardOwnerNameInput>
      <CardSecurityCodeInput
        cardSecurityCode={cardSecurityCode}
        onChange={(e) => {
          const { value } = e.target;
          if (!isNumber(value)) {
            return { success: false, errorMessage: MESSAGE.ALERT_NUMBER };
          }
          dispatch({ type: "cardSecurityCode", target: e.target });
        }}
      ></CardSecurityCodeInput>
      <CardPasswordInput
        cardPassword={cardPassword}
        onChange={(e) => {
          const { value } = e.target;
          if (!isNumber(value)) {
            return { success: false, errorMessage: MESSAGE.ALERT_NUMBER };
          }
          dispatch({ type: "cardPassword", target: e.target });
        }}
      />

      <Link className="button-text" to={ROUTE_PATH.CARD_REGISTRATION_COMPLETED}>
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </Link>
    </>
  );
}
