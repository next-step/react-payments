import BackButton from "components/BackButton/BackButton";
import Card from "components/Card/Card";
import Header from "components/Header/Header";
import Input from "components/Input/Input";
import InputContainer from "components/InputContainer/InputContainer";
import Layout from "components/Layout/Layout";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { CardExpiration, CardName, CardNumbers, CardPassword, CardSecurityCode } from "types/common";

const matchKey = (i: number): keyof CardNumbers => {
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
  const [cardExpiration, setCardExpiration] = useState<CardExpiration>({
    month: "",
    year: "",
  });
  const [cardName, setCardName] = useState<CardName>("");
  const [securityCode, setSecurityCode] = useState<CardSecurityCode>("");
  const [password, setPassword] = useState<CardPassword>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const handleCardNumbers = (e: React.ChangeEvent<HTMLInputElement>, key: keyof CardNumbers): void => {
    setCardNumbers({ ...cardNumbers, [key]: e.target.value });
  };

  const handleCardExpiration = (e: React.ChangeEvent<HTMLInputElement>, key: string): void => {
    setCardExpiration({ ...cardExpiration, [key]: e.target.value });
  };

  const handleCardName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCardName(e.target.value);
  };

  const handleSecurityCode = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSecurityCode(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>, key: string): void => {
    setPassword({ ...password, [key]: e.target.value });
  };

  const handleSubmit = (): void => {
    naviate("/");
  };

  return (
    <Layout>
      <div className="flex items-center">
        <BackButton onClick={() => naviate("/")} />
        <Header title="카드 추가" className="ml-1" />
      </div>

      <div className="my-7 flex justify-center">
        <Card cardNumbers={cardNumbers} expiration={cardExpiration} name={cardName} />
      </div>

      <form onSubmit={handleSubmit}>
        <InputContainer title="카드 이름">
          {Array.from({ length: 4 }, (_, i) => (
            <Input
              key={i}
              type={i > 1 ? "password" : "text"}
              minLength={4}
              maxLength={4}
              placeholder="0000"
              className="px-3.5 text-center"
              value={cardNumbers[matchKey(i)]}
              onChange={(e) => handleCardNumbers(e, matchKey(i))}
              required
            />
          ))}
        </InputContainer>

        <InputContainer title="유효기간" className="w-5/12">
          <Input
            placeholder="MM"
            minLength={2}
            maxLength={2}
            value={cardExpiration.month}
            onChange={(e) => handleCardExpiration(e, "month")}
            className="text-center"
            required
          />
          <Input
            placeholder="YY"
            minLength={2}
            maxLength={2}
            value={cardExpiration.year}
            onChange={(e) => handleCardExpiration(e, "year")}
            className="text-center"
            required
          />
        </InputContainer>

        <InputContainer title="카드 소유자 이름(선택)">
          <Input
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={15}
            value={cardName}
            onChange={handleCardName}
            className="pl-4"
          />
        </InputContainer>

        <InputContainer title="보안코드(CVC/CVV)" className="w-1/3">
          <Input
            type="password"
            minLength={3}
            maxLength={3}
            value={securityCode}
            onChange={handleSecurityCode}
            className="text-center"
            required
          />
        </InputContainer>

        <InputContainer title="카드 비밀번호" className="w-7/12">
          {Array.from({ length: 4 }).map((_, i) => (
            <Input
              key={i}
              className="mr-1.5 text-center"
              width={"small"}
              type={"password"}
              minLength={1}
              maxLength={1}
              value={password[matchKey(i)]}
              onChange={(e) => handlePassword(e, matchKey(i))}
              required
            />
          ))}
        </InputContainer>

        <div className="mt-5 flex justify-end">
          <button className="text-lg">다음</button>
        </div>
      </form>
    </Layout>
  );
};

export default CardAddPage;
