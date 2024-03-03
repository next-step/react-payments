import { Input } from "@/components/primitive/Input";
import { REGEX } from "@/constants/regex";
import { FormInput } from "@/pages/AddCard/components/FormInput";
import { addDash, formatCardExpireDay, ruleFn } from "@/utils";
import { useRef } from "react";
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

export const AddCard = () => {
  const formValue = useRef<TFormValue>();

  const handleChange = (type: TFormInputType, value: string) => {
    switch (type) {
      case "cardNumber":
        formValue.current = { ...formValue.current, cardNumber: value };
        return addDash(ruleFn("ONLY_HYPHEN_AND_NUMBER", value), 4);

      case "expireDay":
        formValue.current = { ...formValue.current, expireDay: value };
        return value;

      case "name":
        formValue.current = { ...formValue.current, name: value };
        return value;

      case "securityCode":
        formValue.current = { ...formValue.current, securityCode: value };
        return value.replace(REGEX.ONLY_NUMBER, "");

      case "primaryPassword":
        formValue.current = { ...formValue.current, primaryPassword: value };
        return value.replace(REGEX.ONLY_NUMBER, "");

      case "secondaryPassword":
        formValue.current = { ...formValue.current, secondaryPassword: value };
        return value.replace(REGEX.ONLY_NUMBER, "");
    }
  };

  console.log("formValue", formValue.current);
  return (
    <>
      <div className="root">
        <div className="app">
          <h2 className="page-title">카드 추가</h2>
          <div className="card-box">
            <div className="empty-card">
              <div className="card-top"></div>
              <div className="card-middle">
                <div className="small-card__chip"></div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom__info">
                  <span className="card-text">NAME</span>
                  <span className="card-text">MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <FormInput
              label="카드 번호"
              maxLength={19}
              textAlign="center"
              onChange={(value: string) => handleChange("cardNumber", value)}
            />
          </div>
          <div className="input-container">
            <FormInput
              label="만료일"
              maxLength={5}
              textAlign="center"
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
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              onChange={(value: string) => handleChange("name", value)}
            />
          </div>
          <div className="input-container">
            <FormInput
              label="보안코드(CVC/CVV)"
              textAlign="center"
              width={"100px"}
              type="password"
              maxLength={3}
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
                inputStyle={{ textAlign: "center" }}
                onChange={(value: string) =>
                  handleChange("primaryPassword", value)
                }
              />

              <FormInput
                maxLength={1}
                type="password"
                style={{ width: "50px" }}
                inputStyle={{ textAlign: "center" }}
                onChange={(value: string) =>
                  handleChange("secondaryPassword", value)
                }
              />
              <Input
                value={"1"}
                inputStyle={{ textAlign: "center" }}
                style={{ width: "50px", textAlign: "center" }}
                type="password"
              />
              <Input
                value={"1"}
                inputStyle={{ textAlign: "center" }}
                style={{ width: "50px", textAlign: "center" }}
                type="password"
              />
            </PasswordInputContainer>
          </div>
          <div className="button-box">
            <span className="button-text">다음</span>
          </div>
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
