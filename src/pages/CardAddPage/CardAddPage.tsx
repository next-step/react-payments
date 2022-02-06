import BackButton from "components/BackButton/BackButton";
import Card from "components/Card/Card";
import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import React from "react";
import { useNavigate } from "react-router";

const CardListPage = (): JSX.Element => {
  const naviate = useNavigate();

  return (
    <Layout>
      <div className="flex items-center">
        <BackButton onClick={() => naviate("/")} />
        <Header title="카드 추가" className="ml-3" />
      </div>
      <Card />
    </Layout>
  );
};

export default CardListPage;
