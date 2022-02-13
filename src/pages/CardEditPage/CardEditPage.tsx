import Card from "components/Card/Card";
import Layout from "components/Layout/Layout";
import useCardContext from "hooks/useCardContext";
import { CardContext } from "provider/CardProvider";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const CardEditPage = (): JSX.Element => {
  const navigate = useNavigate();

  const {
    state: { id },
  } = useLocation() as { state: { id: number } };
  const { cards, setCards } = useCardContext(CardContext);
  const [nickName, setNickName] = useState("");

  const targetCard = cards.find((card) => card.id === id);

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNickName(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setCards(
      cards.map((card) => {
        if (card.id === id) {
          return {
            id,
            cardNumbers: card.cardNumbers,
            cardExpiration: card.cardExpiration,
            cardName: card.cardName,
            cardNickname: nickName || "클린카드",
          };
        } else {
          return card;
        }
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
          value={nickName}
          onChange={handleNickname}
        />
        <div className="mt-6 flex justify-end">
          <button className="absolute right-6 mt-24 text-lg">수정</button>
        </div>
      </form>
    </Layout>
  );
};

export default CardEditPage;
