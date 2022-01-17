import { CardType } from "@common/constants";
import BackButton from "@components/button/BackButton";
import Card from "@components/card";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddCardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="page-title">
        <BackButton onClick={() => navigate(-1)} />
        카드 추가
      </h2>
      <Card type={CardType.small} cardData={undefined} />
    </>
  );
};

export default AddCardPage;
