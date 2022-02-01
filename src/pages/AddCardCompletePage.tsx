import { CardType, MaxLength, RoutePath } from "@common/constants";
import NextBtn from "@components/button/NextBtn";
import Card from "@components/card";
import { useCardData } from "@context/cardData";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddCardCompletePage: React.FC = () => {
  const { tempCardData, addCardData } = useCardData();
  const aliasInputRef = useRef<HTMLInputElement>(null);

  const navigator = useNavigate();

  const handleOnClick = () => {
    addCardData({
      ...tempCardData,
      alias: aliasInputRef.current?.value ?? "DefaultCompany",
    });
    navigator(RoutePath.CardList);
  };

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
        </div>

        <Card type={CardType.big} cardData={tempCardData} />

        <div className="input-container flex-column-center w-100">
          <input
            ref={aliasInputRef}
            className="input-underline w-75"
            maxLength={MaxLength.Alias}
            type="text"
            placeholder="카드의 별칭을 입력해주세요. (선택)"
          />
          <div className="button-box mt-50">
            <NextBtn onClick={handleOnClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCardCompletePage;
