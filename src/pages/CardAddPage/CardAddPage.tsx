import BackButton from "components/BackButton/BackButton";
import Card from "components/Card/Card";
import Header from "components/Header/Header";
import Input from "components/Input/Input";
import InputContainer from "components/InputContainer/InputContainer";
import Layout from "components/Layout/Layout";
import useCardContext from "hooks/useCardContext";
import { CardContext } from "provider/CardProvider";
import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { CardNumbers } from "types/common";
import { isNumber } from "utils/validator";

const matchKey = (i: number): keyof CardNumbers => {
  return i === 0 ? "first" : i === 1 ? "second" : i === 2 ? "third" : "fourth";
};

const CardAddPage = (): JSX.Element => {
  const navigate = useNavigate();

  const {
    cardNumbers,
    cardExpiration,
    cardName,
    securityCode,
    password,
    onChangeCardContextValue,
    setCardContextValue,
  } = useCardContext(CardContext);

  const setDeepCardContextValue = (e: ChangeEvent<HTMLInputElement>, key: string): void => {
    const { name, value } = e.target as { name: "cardNumbers" | "cardExpiration" | "password"; value: string };

    if (!["cardNumbers", "cardExpiration", "password"].includes(name)) return;

    if (key === "month" && Number(value) > 12) return;

    setCardContextValue((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name],
        [key]: value,
      },
    }));
  };

  const handleSecurityCode = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    isNumber(value) && onChangeCardContextValue(e);
  };

  const handleSubmit = (): void => {
    navigate("/add/complete");
  };

  return (
    <Layout>
      <div className="flex items-center">
        <BackButton onClick={() => navigate("/")} />
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
              name="cardNumbers"
              className="px-3.5 text-center"
              value={cardNumbers[matchKey(i)]}
              onChange={(e) => setDeepCardContextValue(e, matchKey(i))}
              required
            />
          ))}
        </InputContainer>

        <InputContainer title="유효기간" className="w-5/12">
          <Input
            name="cardExpiration"
            placeholder="MM"
            minLength={2}
            maxLength={2}
            value={cardExpiration.month}
            onChange={(e) => setDeepCardContextValue(e, "month")}
            className="text-center"
            required
          />
          <Input
            name="cardExpiration"
            placeholder="YY"
            minLength={2}
            maxLength={2}
            value={cardExpiration.year}
            onChange={(e) => setDeepCardContextValue(e, "year")}
            className="text-center"
            required
          />
        </InputContainer>

        <InputContainer title="카드 소유자 이름(선택)">
          <Input
            name="cardName"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={15}
            value={cardName}
            onChange={onChangeCardContextValue}
            className="pl-4"
          />
        </InputContainer>

        <InputContainer title="보안코드(CVC/CVV)" className="w-1/3">
          <Input
            type="password"
            name="securityCode"
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
              name="password"
              className="mr-1.5 text-center"
              width={"small"}
              type={"password"}
              minLength={1}
              maxLength={1}
              value={password[matchKey(i)]}
              onChange={(e) => setDeepCardContextValue(e, matchKey(i))}
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
