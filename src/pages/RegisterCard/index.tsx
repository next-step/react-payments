import { Card } from "@/components/Card";
import { Input } from "@/components/atom/forms/Input";
import { REGEX } from "@/constants/regex";
import { FormInput } from "@/pages/RegisterCard/components/FormInput";
import { addDashAndMask, formatCardExpireDay } from "@/utils";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type TFormValue = {
  cardNumber?: string;
  expireDay?: string;
  name?: string;
  securityCode?: string;
  primaryPassword?: string;
  secondaryPassword?: string;
};

type TFormInputType = keyof TFormValue;

export const RegisterCard = () => {
  const formValue = useRef<TFormValue>();
  const [cardInfo, setCardInfo] = useState({
    cardCorporation: "",
    cardNumber: "",
    name: "",
    expireDay: "",
  });

  const handleChange = (type: TFormInputType, value: string) => {
    switch (type) {
      case "cardNumber": {
        formValue.current = { ...formValue.current, cardNumber: value };
        const _value = value.replace(REGEX.ONLY_ASTERISKS_AND_NUMBER, "");
        const cardNumberWithDash = addDashAndMask(_value);
        setCardInfo((prev) => {
          return { ...prev, cardNumber: cardNumberWithDash };
        });
        return cardNumberWithDash;
      }

      case "expireDay":
        formValue.current = { ...formValue.current, expireDay: value };
        setCardInfo((prev) => {
          return { ...prev, expireDay: value };
        });
        return value;

      case "name":
        formValue.current = { ...formValue.current, name: value };
        setCardInfo((prev) => {
          return { ...prev, name: value };
        });
        return value;

      case "securityCode":
        formValue.current = { ...formValue.current, securityCode: value };
        return value.replace(REGEX.ONLY_NUMBER, "");

      case "primaryPassword":
        formValue.current = { ...formValue.current, primaryPassword: value };
        return value.replace(REGEX.ONLY_NUMBER, "");

      case "secondaryPassword":
        formValue.current = {
          ...formValue.current,
          secondaryPassword: value,
        };
        return value.replace(REGEX.ONLY_NUMBER, "");
    }
  };

  return (
    <>
      <div className="root">
        <div className="app">
          <h2 className="page-title">카드 추가</h2>
          <Card
            cardCorporation="XX카드"
            cardNumber={cardInfo.cardNumber}
            expireDay={cardInfo.expireDay}
            name={cardInfo.name}
          />
          <Input />
          <div className="input-container">
            <FormInput
              label="카드 번호"
              inputStyle={{ color: "#0f9c82" }}
              maxLength={19}
              onChange={(value: string) => handleChange("cardNumber", value)}
            />
          </div>
          <div className="input-container">
            <FormInput
              label="만료일"
              maxLength={5}
              customType="numberOnly"
              inputStyle={{ color: "#0f9c82" }}
              onChange={(value: string) =>
                handleChange("expireDay", formatCardExpireDay(value))
              }
              placeholder="MM/YY"
            />
          </div>

          <div className="input-container">
            <FormInput
              label="카드 소유자 이름(선택)"
              customType="textOnly"
              lengthCheck
              maxLength={30}
              inputStyle={{ color: "#0f9c82" }}
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              onChange={(value: string) => handleChange("name", value)}
            />
          </div>
          <div className="input-container">
            <FormInput
              label="보안코드(CVC/CVV)"
              type="password"
              maxLength={3}
              style={{ width: "100px" }}
              inputStyle={{ textAlign: "center", color: "#0f9c82" }}
              onChange={(value: string) => handleChange("securityCode", value)}
            />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <PasswordInputContainer>
              <FormInput
                maxLength={1}
                type="password"
                style={{ width: "50px" }}
                inputStyle={{ textAlign: "center", color: "#0f9c82" }}
                onChange={(value: string) =>
                  handleChange("primaryPassword", value)
                }
              />

              <FormInput
                maxLength={1}
                type="password"
                style={{ width: "50px" }}
                inputStyle={{ textAlign: "center", color: "#0f9c82" }}
                onChange={(value: string) =>
                  handleChange("secondaryPassword", value)
                }
              />
              <Input
                value={"1"}
                inputStyle={{ textAlign: "center", color: "#0f9c82" }}
                style={{ width: "50px", textAlign: "center" }}
                type="password"
              />
              <Input
                value={"1"}
                inputStyle={{ textAlign: "center", color: "#0f9c82" }}
                style={{ width: "50px", textAlign: "center" }}
                type="password"
              />
            </PasswordInputContainer>
          </div>
          <Link to={"/complete/register"}>
            <button className="button-box">
              <span className="button-text">다음</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
