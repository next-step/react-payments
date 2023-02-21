import { Dispatch, SetStateAction } from "react";
import Button from "components/common/Button";
import Card from "components/common/Card";
import { CardInput } from "components/common/Card/card.type";
import InputContainer from "components/common/Input/InputContainer";

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
            inputList={[
              {
                value: newCardInfo.nickname || "",
                id: "nickname",
                type: "text",
                placeholder: "카드의 별칭을 입력해주세요.",
              },
            ]}
            className={{
              inputContainerClassName: "flex-center w-100",
              inputClassName: "input-underline",
            }}
            onChange={handleCardInputChange}
          />

          <div className="mt-50">
            <Button
              label="다음"
              onClick={() => {
                handleCardNicknameAddClick({ nickname: newCardInfo?.nickname });
                setStep(0);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Completed;
