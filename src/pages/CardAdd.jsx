import { useState, useRef } from "react";
import { isNumericString, isValidateMonth } from "../util/regExp";
import InputGroup from "../components/InputGroup";
import { Link } from "react-router-dom";
import CardBox from "../components/CardBox";
import Card from "../components/Card";

export default function CardAdd() {
  const [cardNumberValue1, setCardNumberValue1] = useState("");
  const [cardNumberValue2, setCardNumberValue2] = useState("");
  const [cardNumberValue3, setCardNumberValue3] = useState("");
  const [cardNumberValue4, setCardNumberValue4] = useState("");
  const cardNumberInfoList = [
    {
      value: cardNumberValue1,
      setValue: setCardNumberValue1,
      type: "text",
      maxLength: 4,
    },
    {
      value: cardNumberValue2,
      setValue: setCardNumberValue2,
      type: "text",
      maxLength: 4,
    },
    {
      value: cardNumberValue3,
      setValue: setCardNumberValue3,
      type: "password",
      maxLength: 4,
    },
    {
      value: cardNumberValue4,
      setValue: setCardNumberValue4,
      type: "password",
      maxLength: 4,
    },
  ];

  // 만료일(MM)
  const expirationMMRef = useRef(null);
  const [expirationMM, setExpirationMM] = useState("");
  // 만료일(YY)
  const expirationYYRef = useRef(null);
  const [expirationYY, setExpirationYY] = useState("");

  // 카드 소유자 이름(선택)
  const cardOwnerNameRef = useRef(null);

  // 만료일(MM)
  const handleExpirationMMInput = (event) => {
    const nowExpirationMM = event.target.value;

    // 빈 문자열
    if (nowExpirationMM === "") {
      setExpirationMM("");
      return;
    }

    // 숫자외 다른 입력
    if (!isNumericString(nowExpirationMM)) {
      alert("숫자만 입력해주세요!");
      return;
    }

    // 유효하지 않은 월
    if (nowExpirationMM.length >= 2 && !isValidateMonth(nowExpirationMM)) {
      alert("유효한 월을 입력해주세요!");
      return;
    }

    // 모두 입력 시, 만료일(YY)
    if (nowExpirationMM.length >= 2) {
      expirationYYRef.current.focus();
    }

    setExpirationMM(nowExpirationMM);
  };

  // 만료일(YY)
  const handleExpirationYYInput = (event) => {
    const nowExpirationYY = event.target.value;

    // 빈 문자열
    if (nowExpirationYY === "") {
      setExpirationYY("");
      return;
    }

    // 숫자외 다른 입력
    if (!isNumericString(nowExpirationYY)) {
      alert("숫자만 입력해주세요!");
      return;
    }

    // 모두 입력 시, 카드 소유자 이름
    if (nowExpirationYY.length === 2) {
      cardOwnerNameRef.current.focus();
    }

    setExpirationYY(nowExpirationYY);
  };

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">
          <Link to="/" className="button-basic">
            {"<"}
          </Link>
          <span className="ml-10">카드 추가</span>
        </h2>
        {/* 카드 */}
        <CardBox>
          <Card
            alias={"카드 별칭"}
            cardNumber={
              cardNumberValue1 +
              cardNumberValue2 +
              cardNumberValue3 +
              cardNumberValue4
            }
          />
        </CardBox>

        {/* 카드 번호 */}
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <InputGroup
            inputGroupInfoList={cardNumberInfoList}
            dividerText={"-"}
          />
        </div>
        {/* 만료일 */}
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <input
              value={expirationMM}
              onChange={handleExpirationMMInput}
              ref={expirationMMRef}
              className="input-basic"
              type="text"
              placeholder="MM"
            />
            <input
              value={expirationYY}
              onChange={handleExpirationYYInput}
              ref={expirationYYRef}
              className="input-basic"
              type="text"
              placeholder="YY"
            />
          </div>
        </div>
        {/* 카드 소유자 이름 */}
        <div className="input-container">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <input
            defaultValue=""
            ref={cardOwnerNameRef}
            type="text"
            className="input-basic"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </div>
        {/* 보안 코드 */}
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <input className="input-basic w-25" type="text" />
        </div>
        {/* 카드 비밀번호 */}
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
  );
}
