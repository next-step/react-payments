import Button from "components/common/Button";
import Card from "components/common/Card";
import InputContainer from "components/common/Input/InputContainer";
import Input from "components/common/Input";
import { STEP } from "constants/Payments";
import {
  usePaymentsDispatch,
  usePaymentsState,
} from "modules/payments/PaymentsContext";
import { ADD_CARD_NICKNAME } from "modules/payments/PaymentsActionType";
import { useNavigate } from "react-router";

const Completed = () => {
  const navigate = useNavigate();

  const { newCardInfo } = usePaymentsState();
  const dispatch = usePaymentsDispatch();

  const handleNextButtonClick = () => {
    dispatch({ type: ADD_CARD_NICKNAME, nickname: "test" });
    // handleCardNicknameAddClick({ nickname: newCardInfo?.nickname });
    navigate(STEP.SHOW_CARD_LIST);
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
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
            input={newCardInfo}
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
              value={newCardInfo.nickname || ""}
              type={"text"}
              id={"nickname"}
              placeholder={"카드의 별칭을 입력해주세요."}
              onChange={handleCardInputChange}
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
