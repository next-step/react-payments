import { RoutePath } from "@common/constants";
import AddCardForm from "@components/addCardForm/AddCardForm";
import BackBtn from "@components/button/BackBtn";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddCardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="page-title p-10">
        <BackBtn onClick={() => navigate(RoutePath.CardList)} />
        카드 추가
      </h2>
      <AddCardForm
        className="p-10"
        onSubmit={() => {
          console.log("on submit");
        }}
      />
    </>
  );
};

export default AddCardPage;
