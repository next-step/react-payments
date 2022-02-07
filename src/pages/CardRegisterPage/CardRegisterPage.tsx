import Layout from "components/Layout/Layout";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardExpiration, CardName, CardNumbers, LocalCard } from "types/common";
import { Location } from "history";
import Card from "components/Card/Card";
import { getLocalStorageItem, setLocalStorageItem } from "utils/localStorage";
import { LOCAL_STORAGE_KEY } from "constants/key";

interface Card {
  numbers: CardNumbers;
  expiration: CardExpiration;
  name: CardName;
}

const CardRegisterPage = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    state: { card },
  } = useLocation() as { state: { card: Card } };
  const { numbers, expiration, name } = card;

  const [nickname, setNickname] = useState<string>("");

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNickname(e.target.value);
  };

  const handleSubmit = (): void => {
    const localCards = getLocalStorageItem({ key: LOCAL_STORAGE_KEY.CARDS, defaultValue: [] }) as LocalCard[];

    setLocalStorageItem({ key: LOCAL_STORAGE_KEY.CARDS, item: [...localCards, { ...card, nickname }] });
    navigate("/");
  };

  return (
    <Layout>
      <form className="flex h-full flex-col items-center p-5" onSubmit={handleSubmit}>
        <h1 className="mt-20 text-2xl text-gray-600">카드 등록이 완료되었습니다.</h1>
        <div className="mb-10 mt-20">
          <Card size="large" cardNumbers={numbers} expiration={expiration} name={name} />
        </div>
        <input
          className="input-underline w-5/6 text-xl"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
          minLength={1}
          maxLength={15}
          required
          value={nickname}
          onChange={handleNickname}
        />
        <div className="mt-6 flex justify-end">
          <button className="absolute right-6 mt-24 text-lg">완료</button>
        </div>
      </form>
    </Layout>
  );
};

export default CardRegisterPage;
