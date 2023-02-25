import { Dispatch, SetStateAction } from "react";
import Button from "components/common/Button";
import Card from "components/common/Card";
import { CardInput } from "components/common/Card/card.type";
import InputContainer from "components/common/Input/InputContainer";
import Input from "components/common/Input";
import { STEP } from "../../../constants/Payments";

interface CompletedProps {
  newCardInfo: CardInput;
  setStep: Dispatch<SetStateAction<number>>;
  handleCardInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardNicknameAddClick: ({ nickname }: { nickname?: string }) => void;
}

const Completed = ({
  newCardInfo,
  setStep,
  handleCardInputChange,
  handleCardNicknameAddClick,
}: CompletedProps) => {
  const handleNextButtonClick = () => {
    handleCardNicknameAddClick({ nickname: newCardInfo?.nickname });
    setStep(STEP.FIRST);
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
