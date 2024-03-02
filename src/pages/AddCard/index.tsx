import { FormInput } from "@/pages/AddCard/components/FormInput";
import { addDash, formatCardExpireDay, ruleFn } from "@/utils";
import { useRef } from "react";

type TFormValue = {
  cardNumber?: string;
  expireDay?: string;
  name?: string;
};

type TFormInputType = "cardNumber" | "expireDay" | "name";

export const AddCard = () => {
  const formValue = useRef<TFormValue>({
    cardNumber: undefined,
    expireDay: undefined,
    name: undefined,
  });

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
            {/* <div className="input-box">
              <input className="input-basic" type="text" />
              <input className="input-basic" type="text" />
              <input className="input-basic" type="password" />
              <input className="input-basic" type="password" />
            </div> */}
            <FormInput
              label="카드 번호"
              maxLength={19}
              onChange={(value: string) => handleChange("cardNumber", value)}
            />
          </div>
          <div className="input-container">
            {/* <div className="input-box w-50">
              <input className="input-basic" type="text" placeholder="MM" />
              <input className="input-basic" type="text" placeholder="YY" />
            </div> */}
            <FormInput
              label="만료일"
              maxLength={5}
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
              maxLengthCheck={30}
              maxLength={30}
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              onChange={(value: string) => handleChange("name", value)}
            />
            {/* <input
              type="text"
              className="input-basic"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            /> */}
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <input className="input-basic w-25" type="password" />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
          </div>
          <div className="button-box">
            <span className="button-text">다음</span>
          </div>
        </div>
      </div>
    </>
  );
};
