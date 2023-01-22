import classnames from "classnames";
import { Card, FlexCenter, PageTitle } from "../../components";
import { useNavigation } from "../hooks";
import { CardAddBaseForm } from "./card-form";
import { useCardAdd } from "./hooks";

export default function CardAdd() {
  const { goToCardList } = useNavigation();
  const { cardState, handleSubmit, step, invalidMessages } = useCardAdd();

  return (
    <div
      className={classnames("app", {
        "flex-column-center": step === "input-card-nickname",
      })}
    >
      {step === "input-card-base" ? (
        <>
          <PageTitle onClick={goToCardList}>&lt; 카드 추가</PageTitle>

          <Card {...cardState} />

          <CardAddBaseForm
            onSubmit={handleSubmit}
            invalidMessages={invalidMessages}
          />
        </>
      ) : (
        <>
          <FlexCenter>
            <PageTitle className="mb-10">카드등록이 완료되었습니다.</PageTitle>
          </FlexCenter>

          <Card {...cardState} />

          <div className="input-container flex-center w-100">
            <input
              className="input-underline w-75"
              type="text"
              placeholder="카드의 별칭을 입력해주세요."
            />
          </div>

          <div className="button-box mt-50">
            <span className="button-text">다음</span>
          </div>
        </>
      )}
    </div>
  );
}
