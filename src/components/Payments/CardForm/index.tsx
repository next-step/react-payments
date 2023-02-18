import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../../common/Button";
import Card from "../../common/Card";
import { CardInput } from "../../common/Card/card.type";
import InputContainer from "../../common/Input/InputContainer";
import Modal from "../../common/Modal";

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
    number1,
    number2,
    number3,
    number4,
    name,
    cvc,
    month,
    year,
    password1,
    password2,
    password3,
    password4,
  } = newCardInfo;

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {step === 1 ? <h2>1️⃣ 카드 추가</h2> : <h2>3️⃣ 카드 추가 - 입력 완료</h2>}
      <div className="root">
        <div className="app">
          <h2 className="page-title">
            <span className="mr-2 cursor-pointer" onClick={() => setStep(0)}>
              {"<"}
            </span>
            카드 추가
          </h2>

          <Card input={newCardInfo} />

          <InputContainer
            hasInputBox
            title="카드 번호"
            inputList={[
              { value: number1, type: "text", id: "number1" },
              { value: number2, type: "text", id: "number2" },
              { value: number3, type: "password", id: "number3" },
              { value: number4, type: "password", id: "number4" },
            ]}
            onChange={handleCardInputChange}
          />

          <InputContainer
            hasInputBox
            title="만료일"
            inputList={[
              {
                value: month,
                type: "text",
                id: "month",
                placeholder: "MM",
              },
              {
                value: year,
                type: "text",
                id: "year",
                placeholder: "YY",
              },
            ]}
            className={{ inputBoxClassName: "w-50" }}
            onChange={handleCardInputChange}
          />

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
          />

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
          />

          <InputContainer
            title="카드 비밀번호"
            inputList={[
              { value: password1, type: "password", id: "password1" },
              { value: password2, type: "password", id: "password2" },
              { value: password3, type: "password", id: "password3" },
              { value: password4, type: "password", id: "password4" },
            ]}
            className={{ inputClassName: "w-15 mr-1" }}
            onChange={handleCardInputChange}
          />

          <Button
            label="다음"
            onClick={() => {
              if (step === 1) {
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
