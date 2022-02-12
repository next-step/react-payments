import Card from "components/Card/Card";
import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import { LOCAL_STORAGE_KEY } from "constants/key";
import React from "react";
import { useNavigate } from "react-router";
import { LocalCard } from "types/common";
import { getLocalStorageItem } from "utils/localStorage";

const CardListPage = (): JSX.Element => {
  const naviatge = useNavigate();

  const cards = getLocalStorageItem({ key: LOCAL_STORAGE_KEY.CARDS, defaultValue: [] }) as LocalCard[];

  return (
    <Layout>
      <Header title="카드 목록" />
      <ul className="flex flex-col items-center">
        {cards.map(({ cardNumbers, cardExpiration, cardName, cardNickname }, i) => (
          <li key={i} className="mt-5">
            <Card size="small" name={cardName} cardNumbers={cardNumbers} expiration={cardExpiration} />
            <h2 className="mt-2 text-center">{cardNickname}</h2>
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
