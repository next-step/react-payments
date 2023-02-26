import React, { RefObject, useId, useRef, useState } from "react";
import {
  characterCount,
  formatNumber,
  validateInput,
  monthConverter,
} from "utils";
import Button from "components/common/Button";
import Card from "components/common/Card";
import InputContainer from "components/common/Input/InputContainer";
import CompanyModal from "components/common/Modal";
import {
  CARD_INFO,
  STEP,
  TYPE,
  TYPE_COMPLETED,
  TYPE_SELECT,
  VALIDATION_LIST,
} from "constants/Payments";
import Input from "components/common/Input";
import {
  usePaymentsDispatch,
  usePaymentsState,
} from "modules/payments/PaymentsContext";
import { useLocation, useNavigate } from "react-router";
import { ADD_CARD } from "modules/payments/PaymentsActionType";

const CardForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get(TYPE);

  const { newCardInfo } = usePaymentsState();
  const dispatch = usePaymentsDispatch();

  const [name, setName] = useState("");
  const id = useId();
  const numberInputRef = useRef<HTMLInputElement>(null);
  const cvcInputRef = useRef<HTMLInputElement>(null);
  const expiryInputRef = useRef<HTMLInputElement>(null);
  const password1InputRef = useRef<HTMLInputElement>(null);
  const password2InputRef = useRef<HTMLInputElement>(null);

  const handleNextButtonClick = () => {
    if (type !== TYPE_COMPLETED) {
      navigate(STEP.SELECT_CARD_COMPANY);
      return;
    }
    // handleCardAddClick();
    dispatch({ type: ADD_CARD });
    navigate(STEP.ADD_CARD_NICKNAME);
  };

  const handleGoBackClick = () => navigate(STEP.SHOW_CARD_LIST);

  const handleCompanyModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // handleCardTypeClick(e);

    navigate(STEP.REGISTER_CARD_COMPLETED);
  };

  const formatInput = (
    input: RefObject<HTMLInputElement>,
    id: typeof CARD_INFO.NUMBER | typeof CARD_INFO.EXPIRY,
    maxLength: number
  ): string => {
    const value = input.current?.value;
    if (!value) {
      return "";
    }
    if (value.length >= maxLength) {
      return value;
    }

    if (id === CARD_INFO.NUMBER) {
      return formatNumber({ input: value, nth: 5 });
    }

    if (value.length === 2) {
      return formatNumber({
        input: monthConverter(value),
        nth: 3,
        formatter: "/",
      });
    } else {
      return value;
    }
  };

  const getReference = (id: string) => {
    switch (id) {
      case CARD_INFO.NUMBER:
        return numberInputRef;
      case CARD_INFO.EXPIRY:
        return expiryInputRef;
      case CARD_INFO.CVC:
        return cvcInputRef;
      case CARD_INFO.PASSWORD1:
        return password1InputRef;
      case CARD_INFO.PASSWORD2:
        return password2InputRef;
      default:
        throw new Error("해당하지 않는 reference 입니다.");
    }
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, maxLength } = e.target;

    const ref = getReference(id);
    if (!ref?.current?.value) {
      return;
    }

    ref.current.value = validateInput({
      ref,
      id,
      validationList: VALIDATION_LIST,
    });

    if (CARD_INFO.NUMBER || CARD_INFO.EXPIRY) {
      ref.current.value = formatInput(ref, id, maxLength);
    }
  };

  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  const handleInputSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {type !== TYPE_COMPLETED ? (
        <h2>1️⃣ 카드 추가</h2>
      ) : (
        <h2>3️⃣ 카드 추가 - 입력 완료</h2>
      )}
      <div className="root">
        <form className="app" onSubmit={handleInputSubmit}>
          <h2 className="page-title">
            <span className="mr-2 cursor-pointer" onClick={handleGoBackClick}>
              {"<"}
            </span>
            카드 추가
          </h2>

          <Card
            input={newCardInfo}
            backgroundColor={newCardInfo.backgroundColor}
          />

          <InputContainer hasInputBox title="카드 번호">
            <Input
              ref={numberInputRef}
              // value={displayNumber({ input: number, startPoint: 2 })}
              type={"text"}
              id={"number"}
              maxLength={19}
              onChange={handleCardInputChange}
            />
          </InputContainer>

          <InputContainer
            hasInputBox
            title="만료일"
            className={{ inputBoxClassName: "w-50" }}
          >
            <Input
              ref={expiryInputRef}
              type={"text"}
              id={"expiry"}
              placeholder={"MM / YY"}
              maxLength={5}
              onChange={handleCardInputChange}
            />
          </InputContainer>

          <div className="relative">
            <InputContainer title="카드 소유자 이름(선택)">
              <Input
                type={"text"}
                id={"name"}
                value={name}
                placeholder={"카드에 표시된 이름과 동일하게 입력하세요."}
                maxLength={30}
                onChange={handleCardNameChange}
              />
            </InputContainer>
            <span className="absolute t-0 r-0 input-title">
              {characterCount(name)}/30
            </span>
          </div>

          <InputContainer title="보안코드(CVC/CVV)">
            <Input
              className="w-25"
              ref={cvcInputRef}
              type={"password"}
              id={"cvc"}
              maxLength={3}
              onChange={handleCardInputChange}
            />
          </InputContainer>

          <InputContainer title="카드 비밀번호">
            <>
              <Input
                className="w-15 mr-1"
                ref={password1InputRef}
                type={"password"}
                id={"password1"}
                maxLength={1}
                onChange={handleCardInputChange}
              />
              <Input
                className="w-15 mr-1"
                ref={password2InputRef}
                type={"password"}
                id={"password2"}
                maxLength={1}
                onChange={handleCardInputChange}
              />
            </>
          </InputContainer>

          <Button
            type={type === TYPE_COMPLETED ? "button" : "submit"}
            label="다음"
            onClick={handleNextButtonClick}
          />
        </form>
        {type === TYPE_SELECT && (
          <CompanyModal
            onClick={handleCompanyModalClick}
            modalItem={[
              { item: "레드 카드", backgroundColor: "red" },
              { item: "블루 카드", backgroundColor: "blue" },
              { item: "그린 카드", backgroundColor: "green" },
              { item: "바이 카드", backgroundColor: "violet" },
              { item: "민트 카드", backgroundColor: "#98ff98" },
              { item: "핑크 카드", backgroundColor: "pink" },
              { item: "오뤤 카드", backgroundColor: "orange" },
              { item: "옐로 카드", backgroundColor: "yellow" },
            ]}
          />
        )}
      </div>
    </>
  );
};

export default CardForm;
