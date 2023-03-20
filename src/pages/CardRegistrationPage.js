import { useContext, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardBox from "../components/CardBox";
import reducer from "../hooks/reducer";

import { CardContext } from "../context/CardContext";
import { ROUTE_PATH } from "../constants/page";
import Header from "../components/Header";
import CardNumberInput from "../components/CardNumberInput";
import CardPasswordInput from "../components/CardPasswordInput";
import CardExpirationInput from "../components/CardExpirationInput";
import CardOwnerNameInput from "../components/CardOwnerNameInput";
import CardSecurityCodeInput from "../components/CardSecurityCodeInput";
import CardCompanyModal from "../components/CardCompanyModal";

import { isNumber } from "../utils/card";
import { MESSAGE } from "../constants/card";
import {
  CARD_NUMBER,
  CARD_SECURITY_CODE,
  CARD_OWNER_NAME,
  CARD_PASSWORD,
} from "../constants/card";

export default function CardRegistrationPage() {
  const { cardInfo, setCardInfo } = useContext(CardContext);

  const navigate = useNavigate();
  const cardNumberRefs = useRef(["", "", "", ""]);
  const ExpirationRefs = useRef(["", ""]);
  const OwnerNameRef = useRef("");
  const PasswordRefs = useRef(["", ""]);
  const SecurityCodeRef = useRef("");

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
    cardColor: "",
    cardCompanyName: "",
  });

  const {
    cardNumber,
    cardExpiration,
    cardOwnerName,
    cardSecurityCode,
    cardPassword,
  } = state;

  const [isShowModal, setIsShowModal] = useState(true);

  const isFormFilled =
    cardNumberRefs.current[0]?.value?.length === CARD_NUMBER.MAX_LENGTH &&
    cardNumberRefs.current[1]?.value?.length === CARD_NUMBER.MAX_LENGTH &&
    cardNumberRefs.current[2]?.value?.length === CARD_NUMBER.MAX_LENGTH &&
    cardNumberRefs.current[3]?.value?.length === CARD_NUMBER.MAX_LENGTH &&
    ExpirationRefs.current[0]?.value > 0 &&
    ExpirationRefs.current[1]?.value > 0 &&
    OwnerNameRef.current?.value?.length > 0 &&
    SecurityCodeRef.current?.value?.length === CARD_SECURITY_CODE.MAX_LENGTH &&
    PasswordRefs.current[0]?.value?.length === CARD_PASSWORD.MAX_LENGTH &&
    PasswordRefs.current[1]?.value?.length === CARD_PASSWORD.MAX_LENGTH;

  function handleSubmit(e) {
    e.preventDefault();
    // TODO : 중복 검증
  }

  function handleModalClick({ currentTarget }) {
    const cardColor = currentTarget.children[0]?.classList[1];
    const cardCompanyName = currentTarget.children[1]?.innerText;
    setCardInfo({
      ...cardInfo,
      ["cardCompanyName"]: cardCompanyName,
      ["cardNickName"]: cardCompanyName,
      ["cardColor"]: cardColor,
    });
    setIsShowModal(false);
  }

  function isValidOwnerName(value) {
    if (value.length <= CARD_OWNER_NAME.MAX_LENGTH) {
      return true;
    }
    return false;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Header
          className="page-title"
          linkToPath={ROUTE_PATH.REGISTED_CARD_LIST}
          linkText="&lt;"
        >
          카드 추가
        </Header>
        <CardBox cardInfo={cardInfo} isEmpty="true" cardSize="small" />
        <CardNumberInput
          cardNumber={cardNumber}
          onChange={(e) => {
            if (!isNumber(e.target.value))
              return { success: false, errorMessage: MESSAGE.ALERT_NUMBER };
            dispatch({ type: "cardNumber", target: e.target });
            setCardInfo({
              ...cardInfo,
              ["cardNumber"]: {
                num0: cardNumberRefs.current[0]?.value,
                num1: cardNumberRefs.current[1]?.value,
                num2: cardNumberRefs.current[2]?.value,
                num3: cardNumberRefs.current[3]?.value,
              },
            });
            if (e.target.value.length === 4) {
              if (
                cardNumberRefs.current[0]?.value?.length === 4 &&
                cardNumberRefs.current[1]?.value?.length === 4 &&
                cardNumberRefs.current[2]?.value?.length === 4 &&
                cardNumberRefs.current[3]?.value?.length === 4
              )
                ExpirationRefs.current[0]?.focus();
              else e.target.nextSibling?.focus();
            }
          }}
          cardNumberRefs={cardNumberRefs}
        />
        <CardExpirationInput
          cardExpiration={cardExpiration}
          onChange={(e) => {
            const { name, value } = e.target;
            if (!isNumber(value))
              return { success: false, errorMessage: MESSAGE.ALERT_NUMBER };
            if (name !== "month" && name !== "year") {
              return { success: false, errorMessage: "잘못된 입력 시도입니다" };
            }
            if (name === "month") {
              if (value > 12) {
                return {
                  success: false,
                  errorMessage: MESSAGE.ALERT_EXP_MONTH,
                };
              }
            } else {
              if (value > 31 || value === 0) {
                return { success: false, errorMessage: MESSAGE.ALERT_EXP_YEAR };
              }
            }
            dispatch({ type: "cardExpiration", target: e.target });
            setCardInfo({
              ...cardInfo,
              ["cardExpiration"]: {
                month: ExpirationRefs.current[0]?.value,
                year: ExpirationRefs.current[1]?.value,
              },
            });
            if (e.target.value.length === 2) {
              if (
                ExpirationRefs.current[0]?.value?.length === 2 &&
                ExpirationRefs.current[1]?.value?.length === 2
              )
                OwnerNameRef.current?.focus();
              else e.target.nextSibling?.focus();
            }
            if (e.target.value.length === 2) e.target.nextSibling?.focus();
          }}
          ExpirationRefs={ExpirationRefs}
        />
        <CardOwnerNameInput
          cardOwnerName={cardOwnerName}
          onChange={(e) => {
            const { value } = e.target;
            if (!isValidOwnerName(value)) {
              return {
                success: false,
                errorMessage: MESSAGE.ALERT_OWNERNAME_MAXLENGTH,
              };
            }
            dispatch({ type: "cardOwnerName", target: e.target });
            setCardInfo({
              ...cardInfo,
              ["cardOwnerName"]: OwnerNameRef.current?.value,
            });
            if (e.target.value.length === 30) SecurityCodeRef.current?.focus();
          }}
          OwnerNameRef={OwnerNameRef}
        />
        <CardSecurityCodeInput
          cardSecurityCode={cardSecurityCode}
          onChange={(e) => {
            const { value } = e.target;
            if (!isNumber(value)) {
              return { success: false, errorMessage: MESSAGE.ALERT_NUMBER };
            }
            dispatch({ type: "cardSecurityCode", target: e.target });
            setCardInfo({
              ...cardInfo,
              ["cardSecurityCode"]: SecurityCodeRef.current?.value,
            });
            if (e.target.value.length === 3) PasswordRefs.current[0]?.focus();
          }}
          SecurityCodeRef={SecurityCodeRef}
        />
        <CardPasswordInput
          cardPassword={cardPassword}
          onChange={(e) => {
            const { value } = e.target;
            if (!isNumber(value)) {
              return { success: false, errorMessage: MESSAGE.ALERT_NUMBER };
            }
            dispatch({ type: "cardPassword", target: e.target });
            if (e.target.value.length === 1) e.target.nextSibling?.focus();
            setCardInfo({
              ...cardInfo,
              ["cardPassword"]: {
                num0: PasswordRefs.current[0]?.value,
                num1: PasswordRefs.current[1]?.value,
                num2: PasswordRefs.current[2]?.value,
                num3: PasswordRefs.current[3]?.value,
              },
            });
          }}
          PasswordRefs={PasswordRefs}
        />
        <div className="button-box">
          <button
            className="button-text"
            disabled={!isFormFilled}
            onClick={() => {
              navigate(ROUTE_PATH.CARD_REGISTRATION_COMPLETED);
            }}
          >
            다음
          </button>
        </div>
      </form>
      {isShowModal && <CardCompanyModal handleModalClick={handleModalClick} />}
    </>
  );
}
