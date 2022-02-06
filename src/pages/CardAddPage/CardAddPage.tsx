import BackButton from "components/BackButton/BackButton";
import Card from "components/Card/Card";
import Header from "components/Header/Header";
import Input from "components/Input/Input";
import InputContainer from "components/InputContainer/InputContainer";
import Layout from "components/Layout/Layout";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { CardNumbers } from "types/common";

const matchCardNumber = (i: number): keyof CardNumbers => {
  return i === 0 ? "first" : i === 1 ? "second" : i === 2 ? "third" : "fourth";
};

const CardAddPage = (): JSX.Element => {
  const naviate = useNavigate();

  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const handleCardNumbers = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ): void => {
    setCardNumbers({ ...cardNumbers, [matchCardNumber(i)]: e.target.value });
  };

  return (
    <Layout>
      <div className="flex items-center">
        <BackButton onClick={() => naviate("/")} />
        <Header title="카드 추가" className="ml-1" />
      </div>

      <div className="flex justify-center my-7">
        <Card />
      </div>

      <form>
        <InputContainer title="카드 이름">
          {Array.from({ length: 4 }, (_, i) => (
            <Input
              key={i}
              type={i > 1 ? "password" : "text"}
              minLength={4}
              maxLength={4}
              placeholder="0000"
              className="px-3.5 text-center"
              value={cardNumbers[matchCardNumber(i)]}
              onChange={(e) => handleCardNumbers(e, i)}
            />
          ))}
        </InputContainer>
      </form>
    </Layout>
  );
};

export default CardAddPage;
