import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Pages, useRouteContext } from "../providers";

interface IProps {}

export default function CardAdd(props: IProps) {
  const { pushRoute } = useRouteContext();
  console.log("CardAdd");

  const $cardNumber = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if ($cardNumber.current === null) {
      return;
    }

    const $cardNumberInput: HTMLInputElement = $cardNumber.current;

    const numberStack: number[] = [];
    const computeCardNumbers = () =>
      [
        numberStack.slice(0, 4).join(""),
        numberStack.slice(4, 8).join(""),
        numberStack
          .slice(8, 12)
          .map(() => "*")
          .join(""),
        numberStack
          .slice(12, 16)
          .map(() => "*")
          .join(""),
      ]
        .filter(Boolean)
        .join("-");

    function handleKeyDown(event: KeyboardEvent) {
      const { key } = event;
      const numberValue = Number(key);
      if (!key.includes("Arrow")) {
        event.preventDefault();
      }
      if (key === "Backspace") {
        numberStack.pop();
      }
      if (!isNaN(numberValue) && numberStack.length < 16) {
        numberStack.push(numberValue);
      }
      $cardNumberInput.value = computeCardNumbers();
    }

    $cardNumberInput.addEventListener("keydown", handleKeyDown);

    return () => $cardNumberInput.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <input ref={$cardNumber} className="input-basic" type="text" />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <input className="input-basic" type="text" placeholder="MM" />
          <input className="input-basic" type="text" placeholder="YY" />
        </div>
      </div>
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
