import React, { Dispatch, SetStateAction, useState } from "react";
import { characterCount, displayNumber } from "utils";
import Button from "components/common/Button";
import Card from "components/common/Card";
import { CardInput } from "components/common/Card/card.type";
import InputContainer from "components/common/Input/InputContainer";
import CompanyModal from "components/common/Modal";
import { STEP } from "constants/Payments";
import Input from "components/common/Input";

interface CardFormProps {
  newCardInfo: CardInput;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  handleCardInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardTypeClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleCardAddClick: () => void;
}

const CardForm = ({
  newCardInfo,
  step,
  setStep,
  handleCardInputChange,
  handleCardTypeClick,
  handleCardAddClick,
}: CardFormProps) => {
  const {
    number = "",
    name = "",
    cvc = "",
    expiry = "",
    password1 = "",
    password2 = "",
  } = newCardInfo;

  const [showCompanyModal, setShowCompanyModal] = useState<boolean>(false);

  const handleNextButtonClick = () => {
    if (step === STEP.REGISTER_CARD) {
      setShowCompanyModal((prev: boolean) => !prev);
      return;
    }
    handleCardAddClick();
    setStep(STEP.ADD_CARD_NICKNAME);
  };

  const handleGoBackClick = () => setStep(STEP.SHOW_CARD_LIST);

  const handleCompanyModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleCardTypeClick(e);
    setShowCompanyModal((prev: boolean) => !prev);
    setStep(STEP.SELECT_CARD_COMPANY);
  };

  return (
    <>
      {step === STEP.REGISTER_CARD ? (
        <h2>1️⃣ 카드 추가</h2>
      ) : (
        <h2>3️⃣ 카드 추가 - 입력 완료</h2>
      )}
      <div className="root">
        <div className="app">
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
              value={displayNumber({ input: number, startPoint: 2 })}
              type={"text"}
              id={"number"}
              onChange={handleCardInputChange}
              maxLength={19}
            />
          </InputContainer>

          <InputContainer
            hasInputBox
            title="만료일"
            className={{ inputBoxClassName: "w-50" }}
          >
            <Input
              value={expiry}
              type={"text"}
              id={"expiry"}
              placeholder={"MM / YY"}
              onChange={handleCardInputChange}
              maxLength={5}
            />
          </InputContainer>

          <div className="relative">
            <InputContainer title="카드 소유자 이름(선택)">
              <Input
                value={name}
                type={"text"}
                id={"name"}
                placeholder={"카드에 표시된 이름과 동일하게 입력하세요."}
                onChange={handleCardInputChange}
                maxLength={30}
              />
            </InputContainer>
            <span className="absolute t-0 r-0 input-title">
              {characterCount(name)}/30
            </span>
          </div>

          <InputContainer title="보안코드(CVC/CVV)">
            <Input
              className="w-25"
              value={cvc}
              type={"password"}
              id={"cvc"}
              onChange={handleCardInputChange}
              maxLength={3}
            />
          </InputContainer>

          <InputContainer title="카드 비밀번호">
            <>
              <Input
                className="w-15 mr-1"
                value={password1}
                type={"password"}
                id={"password1"}
                onChange={handleCardInputChange}
                maxLength={1}
              />
              <Input
                className="w-15 mr-1"
                value={password2}
                type={"password"}
                id={"password2"}
                onChange={handleCardInputChange}
                maxLength={1}
              />
            </>
          </InputContainer>

          <Button label="다음" onClick={handleNextButtonClick} />
        </div>
        {showCompanyModal && (
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
