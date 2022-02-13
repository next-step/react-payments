import Card from "components/Card/Card";
import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import useCardContext from "hooks/useCardContext";
import { CardContext } from "provider/CardProvider";
import React from "react";
import { useNavigate } from "react-router";

const CardListPage = (): JSX.Element => {
  const naviatge = useNavigate();

  const { cards, setCards } = useCardContext(CardContext);

  const handleDeleteCard = (id: number): void => {
    if (!window.confirm("카드를 삭제하시겠습니까?")) return;

    setCards(cards.filter((card) => card.id !== id));
  };

  const handleEditCard = (id: number): void => {};

  return (
    <Layout>
      <Header title="카드 목록" />
      <ul className="flex flex-col items-center">
        {cards.map(({ id, cardNumbers, cardExpiration, cardName, cardNickname }, i) => (
          <li key={i} className="mt-5">
            <Card size="small" name={cardName} cardNumbers={cardNumbers} expiration={cardExpiration} />
            <div className="flex-center mt-2 flex flex-col">
              <h2 className="text-center">{cardNickname}</h2>
              <div className="mt-1 flex gap-2">
                <button className="ml text-xs text-gray-500" onClick={() => handleEditCard(id)}>
                  수정
                </button>
                <button className="ml text-xs text-red-300" onClick={() => handleDeleteCard(id)}>
                  삭제
                </button>
              </div>
            </div>
          </li>
        ))}
        <li className="mt-5">
          <div className="flex h-130 w-208 items-center justify-center rounded-xl bg-gray-350">
            <button className="text-4xl" onClick={() => naviatge("/add")}>
              +
            </button>
          </div>
        </li>
      </ul>
    </Layout>
  );
};

export default CardListPage;
