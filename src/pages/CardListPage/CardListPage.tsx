import BackButton from "components/BackButton/BackButton";
import Card from "components/Card/Card";
import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import React from "react";

const CardListPage = (): JSX.Element => {
  // const cards = JSON.parse(localStorage.getItem(KEY.CARDS)) ?? [];

  return (
    <Layout>
      <Header title="카드 목록" />
      <ul className="flex flex-col items-center">
        {/* {cards.map((card, index) => (
          <li key={index} className="mt-5">
            <Card
              size="small"
              cardNumbers={card.cardNumbers}
              cardCompany={card.cardCompany}
              expiration={card.expiration.month + '/' + card.expiration.year}
            />
            <h2 className="mt-2 text-center">{card.cardName}</h2>
          </li>
        ))} */}

        <li className="mt-5">
          <div className="flex items-center justify-center w-208 h-130 bg-gray-350 rounded-xl">
            <button className="text-4xl">+</button>
          </div>
        </li>
      </ul>
    </Layout>
  );
};

export default CardListPage;
