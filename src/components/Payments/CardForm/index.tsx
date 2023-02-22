import React, { Dispatch, SetStateAction, useState } from "react";
import { characterCount, displayNumber } from "utils";
import Button from "components/common/Button";
import Card from "components/common/Card";
import { CardInput } from "components/common/Card/card.type";
import InputContainer from "components/common/Input/InputContainer";
import Modal from "components/common/Modal";
import { STEP } from "../../../constants/Payments";

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

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {step === STEP.SECOND ? (
        <h2>1️⃣ 카드 추가</h2>
      ) : (
        <h2>3️⃣ 카드 추가 - 입력 완료</h2>
      )}
      <div className="root">
        <div className="app">
          <h2 className="page-title">
            <span className="mr-2 cursor-pointer" onClick={() => setStep(0)}>
              {"<"}
            </span>
            카드 추가
          </h2>

          <Card
            input={newCardInfo}
            backgroundColor={newCardInfo.backgroundColor}
          />

          <InputContainer
            hasInputBox
            title="카드 번호"
            inputList={[
              {
                value: displayNumber({ input: number, startPoint: 2 }),
                type: "text",
                id: "number",
              },
            ]}
            onChange={handleCardInputChange}
            maxLength={19}
          />

          <InputContainer
            hasInputBox
            title="만료일"
            inputList={[
              {
                value: expiry,
                type: "text",
                id: "expiry",
                placeholder: "MM / YY",
              },
            ]}
            className={{ inputBoxClassName: "w-50" }}
            onChange={handleCardInputChange}
            maxLength={5}
          />

          <div className="relative">
            <InputContainer
              title="카드 소유자 이름(선택)"
              inputList={[
                {
                  value: name,
                  type: "text",
                  id: "name",
                  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
                },
              ]}
              onChange={handleCardInputChange}
              maxLength={30}
            />
            <span className="absolute t-0 r-0 input-title">
              {characterCount(name)}/30
            </span>
          </div>

          <InputContainer
            title="보안코드(CVC/CVV)"
            inputList={[
              {
                value: cvc,
                type: "password",
                id: "cvc",
              },
            ]}
            className={{ inputClassName: "w-25" }}
            onChange={handleCardInputChange}
            maxLength={3}
          />

          <InputContainer
            title="카드 비밀번호"
            inputList={[
              { value: password1, type: "password", id: "password1" },
              { value: password2, type: "password", id: "password2" },
            ]}
            className={{ inputClassName: "w-15 mr-1" }}
            onChange={handleCardInputChange}
            maxLength={1}
          />

          <Button
            label="다음"
            onClick={() => {
              if (step === STEP.SECOND) {
                setShowModal((prev: boolean) => !prev);
                return;
              }
              handleCardAddClick();
              setStep(3);
            }}
          />
        </div>
        {showModal && (
          <Modal
            onClick={(e) => {
              handleCardTypeClick(e);
              setShowModal((prev: boolean) => !prev);
              setStep(2);
            }}
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
