import Button from "components/common/Button";
import Card from "components/common/Card";
import InputContainer from "components/common/Input/InputContainer";
import Input from "components/common/Input";
import { STEP } from "constants/Payments";
import { useCardForm } from "pages/payments/hooks/useCardForm";
import { useNavigate } from "react-router";
import {
  usePaymentsDispatch,
  usePaymentsState,
} from "pages/payments/modules/payments/PaymentsContext";
import {
  ADD_CARD,
  EDIT_CARD,
} from "pages/payments/modules/payments/PaymentsActionType";

const Completed = () => {
  const navigate = useNavigate();
  const { nickname, handleCardNicknameChange } = useCardForm();

  const { newCardInfo, selectedCard } = usePaymentsState();
  const dispatch = usePaymentsDispatch();

  const handleNextButtonClick = () => {
    if (selectedCard) {
      dispatch({ type: EDIT_CARD, nickname });
    } else {
      dispatch({ type: ADD_CARD, nickname });
    }
    navigate(STEP.SHOW_CARD_LIST);
  };

  return (
    <>
      <h2>4️⃣ 카드 추가 완료</h2>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
          </div>
          <Card
            input={selectedCard || newCardInfo}
            backgroundColor={newCardInfo?.backgroundColor}
            isBigCard
          />
          <InputContainer
            className={{
              inputContainerClassName: "flex-center w-100",
            }}
          >
            <Input
              className="input-underline"
              value={nickname}
              type={"text"}
              id={"nickname"}
              placeholder={"카드의 별칭을 입력해주세요."}
              onChange={handleCardNicknameChange}
            />
          </InputContainer>
          <div className="mt-50">
            <Button label="다음" onClick={handleNextButtonClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Completed;
