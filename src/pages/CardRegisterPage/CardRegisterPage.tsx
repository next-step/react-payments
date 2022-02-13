import Card from "components/Card/Card";
import Layout from "components/Layout/Layout";
import { LOCAL_STORAGE_KEY } from "constants/key";
import useCardContext from "hooks/useCardContext";
import { CardContext } from "provider/CardProvider";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CardExpiration, CardName, CardNumbers, LocalCard } from "types/common";

interface Card {
  numbers: CardNumbers;
  expiration: CardExpiration;
  name: CardName;
}

const CardRegisterPage = (): JSX.Element => {
  const navigate = useNavigate();

  const { cardName, cardNumbers, cardExpiration, cardNickname, onChangeCardContextValue } = useCardContext(CardContext);

  const handleSubmit = (): void => {
    // const localCards = getLocalStorageItem({ key: LOCAL_STORAGE_KEY.CARDS, defaultValue: [] }) as LocalCard[];

    // setLocalStorageItem({
    //   key: LOCAL_STORAGE_KEY.CARDS,
    //   item: [...localCards, { id: Date.now(), cardName, cardNumbers, cardExpiration, cardNickname }],
    // });
    navigate("/");
  };

  return (
    <Layout>
      <form className="flex h-full flex-col items-center p-5" onSubmit={handleSubmit}>
        <h1 className="mt-20 text-2xl text-gray-600">카드 등록이 완료되었습니다.</h1>
        <div className="mb-10 mt-20">
          <Card size="large" cardNumbers={cardNumbers} expiration={cardExpiration} name={cardName} />
        </div>
        <input
          className="input-underline w-5/6 text-xl"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
          minLength={1}
          maxLength={15}
          required
          name="cardNickname"
          value={cardNickname}
          onChange={onChangeCardContextValue}
        />
        <div className="mt-6 flex justify-end">
          <button className="absolute right-6 mt-24 text-lg">완료</button>
        </div>
      </form>
    </Layout>
  );
};

export default CardRegisterPage;
