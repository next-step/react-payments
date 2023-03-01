import Card from "components/card";

import { SubWrapper, Wrapper } from "components/common/ui";
import { useRouter } from "hooks/useRouter";
import { ChangeEvent } from "react";
import { usePayments } from "store/context";

const Content = () => {
  const {
    cardNumbers,
    cardCompany,
    cardExpiration,
    cardOwnerName,
    cardNickName,
    handleCardNickName,
    handleNickNameCardMerge,
  } = usePayments();

  const { go } = useRouter();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    handleCardNickName(value);
  };

  const nextPage = () => {
    handleNickNameCardMerge(cardNickName);
    go("/");
  };

  return (
    <>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card
        cardNumbers={cardNumbers}
        cardCompany={cardCompany}
        cardExpiration={cardExpiration}
        cardOwnerName={cardOwnerName}
        size="big"
      />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
          onChange={onChange}
        />
      </div>

      <div className="button-box mt-50">
        <span className="button-text" onClick={() => nextPage()}>
          다음
        </span>
      </div>
    </>
  );
};

const ComplateCard = () => {
  return (
    <Wrapper>
      <SubWrapper flex={"yes"}>
        <Content />
      </SubWrapper>
    </Wrapper>
  );
};

export default ComplateCard;
