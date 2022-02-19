import Card from "components/Card/Card";
import Layout from "components/Layout/Layout";
import useCardContext from "hooks/useCardContext";
import { CardContext } from "provider/CardProvider";
import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { CardExpiration, CardName, CardNumbers } from "types/common";

interface Card {
  numbers: CardNumbers;
  expiration: CardExpiration;
  name: CardName;
}

const CardRegisterPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const { currentCardId, isEdit } = location.state as { currentCardId: number; isEdit: boolean | undefined };

  const { cards, setCards, cardName, cardNumbers, cardExpiration, cardNickname, onChangeCardContextValue } =
    useCardContext(CardContext);

  const targetCard = cards.find((card) => card.id === currentCardId);

  const handleSubmit = (): void => {
    setCards(
      cards.map((card) => {
        return card.id === currentCardId ? { ...card, cardNickname: cardNickname || "클린카드" } : card;
      })
    );

    navigate("/");
  };

  return (
    <Layout>
      <form className="flex h-full flex-col items-center p-5" onSubmit={handleSubmit}>
        <h1 className="mt-20 text-2xl text-gray-600">카드 등록이 완료되었습니다.</h1>
        <div className="mb-10 mt-20">
          <Card
            size="large"
            cardNumbers={targetCard?.cardNumbers}
            expiration={targetCard?.cardExpiration}
            name={targetCard?.cardName}
          />
        </div>
        <input
          className="input-underline w-5/6 text-xl"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
          minLength={1}
          maxLength={15}
          name="cardNickname"
          value={cardNickname}
          onChange={onChangeCardContextValue}
        />
        <div className="mt-6 flex justify-end">
          <button className="absolute right-6 mt-24 text-lg">{isEdit ? "수정" : "다음"}</button>
        </div>
      </form>
    </Layout>
  );
};

export default CardRegisterPage;
