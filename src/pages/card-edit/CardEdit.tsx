import classnames from "classnames";
import { useMemo } from "react";
import { Card, FlexCenter, PageTitle } from "../../components";
import { useNavigation } from "../hooks";
import { CardEditBaseForm, CardNicknameForm } from "./card-form";
import { useCardEdit } from "./hooks";
import { ModalProvider } from "./providers";

export default function CardEdit() {
  const { handleClickCardList, cardId } = useNavigation();
  const { cardState, handleSubmitBaseForm, step, invalidMessages } =
    useCardEdit(cardId);

  const nicknameFormTitle = useMemo(
    () => (cardId ? "카드 별칭 수정" : "카드 별칭 등록"),
    [cardId]
  );

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
            <CardEditBaseForm
              onSubmit={handleSubmitBaseForm}
              invalidMessages={invalidMessages}
            />
          </ModalProvider>
        </>
      ) : (
        <>
          <FlexCenter>
            <PageTitle className="mb-10">{nicknameFormTitle}</PageTitle>
          </FlexCenter>

          <Card {...cardState} />

          <CardNicknameForm />
        </>
      )}
    </div>
  );
}
