import React, { MouseEventHandler, useCallback } from "react";
import { Card, CardNumberInputs, InputContainer } from "../components";
import { Pages, useRouteContext } from "../providers";
import { useCardState } from "./hooks";
import CardExpired from "../components/card-form/CardExpired";

interface IProps {}

export default function CardAdd(props: IProps) {
  const { pushRoute } = useRouteContext();
  const { cardState, changeCardState } = useCardState();

  const handleClickBack: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      pushRoute(Pages.CARD_LIST);
    },
    [pushRoute]
  );

  return (
    <div className="app">
      <h2 className="page-title" onClick={handleClickBack}>
        &lt; 카드 추가
      </h2>

      <Card {...cardState} />

      <InputContainer title="카드 번호">
        <CardNumberInputs changeCardState={changeCardState} />
      </InputContainer>

      <InputContainer title="만료일">
        <CardExpired />
      </InputContainer>

      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
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
  );
}
