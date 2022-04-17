import { CardType, RoutePath } from "@common/constants";
import { CardData } from "@common/defines";
import AddCardForm from "@components/addCardForm/AddCardForm";
import BackBtn from "@components/button/BackBtn";
import Card from "@components/card";
import { useCardData } from "@context/cardData";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddCardPage: React.FC = () => {
  const navigate = useNavigate();
  const { tempCardData, setTempCardData } = useCardData();

  useEffect(() => {
    setTempCardData({});
  }, []);

  return (
    <>
      <h2 className="page-title p-10">
        <BackBtn onClick={() => navigate(RoutePath.CardList)} />
        카드 추가
      </h2>
      <Card type={CardType.small} cardData={tempCardData} />
      <AddCardForm
        className="p-10"
        handleFormData={(formData) => {
          console.log("on submit");
          navigate(RoutePath.AddCardComplete);
        }}
      />
    </>
  );
};

export default AddCardPage;
