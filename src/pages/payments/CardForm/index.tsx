import { characterCount } from "pages/payments/utils";
import Button from "components/common/Button";
import Card from "components/common/Card";
import InputContainer from "components/common/Input/InputContainer";
import CompanyModal from "components/common/Modal";
import { STEP, TYPE, TYPE_COMPLETED, TYPE_SELECT } from "constants/Payments";
import Input from "components/common/Input";
import { usePaymentsState } from "pages/payments/modules/payments/PaymentsContext";
import { useLocation, useNavigate } from "react-router";
import { useCardForm } from "pages/payments/hooks/useCardForm";

const CardForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get(TYPE);

  const { newCardInfo } = usePaymentsState();
  const {
    name,
    ref: {
      numberInputRef,
      cvcInputRef,
      expiryInputRef,
      password1InputRef,
      password2InputRef,
    },
    handleCardInputChange,
    handleCompanyModalClick,
    handleCardNameChange,
    handleInputSubmit,
  } = useCardForm();

  const handleNextButtonClick = () => {
    if (type !== TYPE_COMPLETED) {
      navigate(STEP.SELECT_CARD_COMPANY);
      return;
    }
    navigate(STEP.ADD_CARD_NICKNAME);
  };

  const handleGoBackClick = () => navigate(STEP.SHOW_CARD_LIST);

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
              disabled={type === TYPE_COMPLETED}
              ref={numberInputRef}
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
              disabled={type === TYPE_COMPLETED}
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
                disabled={type === TYPE_COMPLETED}
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
              disabled={type === TYPE_COMPLETED}
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
                disabled={type === TYPE_COMPLETED}
                className="w-15 mr-1"
                ref={password1InputRef}
                type={"password"}
                id={"password1"}
                maxLength={1}
                onChange={handleCardInputChange}
              />
              <Input
                disabled={type === TYPE_COMPLETED}
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
