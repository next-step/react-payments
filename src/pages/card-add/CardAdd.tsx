import classnames from "classnames";
import { Card, FlexCenter, PageTitle } from "../../components";
import { useNavigation } from "../hooks";
import { CardAddBaseForm, CardNicknameForm } from "./card-form";
import { useCardAdd } from "./hooks";
import { ModalProvider } from "./providers";

export default function CardAdd() {
  const { handleClickCardList } = useNavigation();
  const { cardState, handleSubmitBaseForm, step, invalidMessages } =
    useCardAdd();

  return (
    <div
      className={classnames("app", {
        "flex-column-center": step === "input-card-nickname",
      })}
    >
      {step === "input-card-base" ? (
        <>
          <PageTitle onClick={handleClickCardList}>&lt; 카드 추가</PageTitle>

          <Card {...cardState} />

          <ModalProvider>
            <CardAddBaseForm
              onSubmit={handleSubmitBaseForm}
              invalidMessages={invalidMessages}
            />
          </ModalProvider>
        </>
      ) : (
        <>
          <FlexCenter>
            <PageTitle className="mb-10">카드등록이 완료되었습니다.</PageTitle>
          </FlexCenter>

          <Card {...cardState} />

          <CardNicknameForm />
        </>
      )}
    </div>
  );
}
