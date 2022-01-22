import { useState } from "react";
import { Link } from "react-router-dom";

function AddCard() {
  const [cardNumberSeries, setCardNumberSeries] = useState("");
  const [cardNumberCompany, setCardNumberCompany] = useState("");
  const [cardNumberIndividual, setCardNumberIndividual] = useState("");
  const [cardNumberCode, setCardNumberCode] = useState("");
  const [dueMonth, setDueMonth] = useState("");
  const [dueYear, setDueYear] = useState("");

  const checkNumber = (event) => {
    if (typeof event.target.value !== Number) {
      event.target.value = event.target.value.replace(/[^0-9.]/g, "");
    }
  };

  const masking = (value) => {
    return value.replaceAll(/[0-9]/g, "*");
  };

  const handleSeriesNumber = (event) => {
    checkNumber(event);
    setCardNumberSeries(event.target.value);
  };

  const handleCompanyNumber = (event) => {
    checkNumber(event);
    setCardNumberCompany(event.target.value);
  };

  const handleIndividualNumber = (event) => {
    checkNumber(event);
    setCardNumberIndividual(event.target.value);
  };

  const handleCodeNumber = (event) => {
    checkNumber(event);
    setCardNumberCode(event.target.value);
  };

  const handleMonth = (event) => {
    console.log(event.target.value.length);
    checkNumber(event);
    if (
      !(event.target.value >= 0 && event.target.value <= 12) ||
      event.target.value === "00"
    ) {
      setDueMonth("");
      event.target.value = "";
      return;
    }
    setDueMonth(event.target.value);
  };

  const handleYear = (event) => {
    checkNumber(event);
    setDueYear(event.target.value);
  };

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">
          <Link to="/list" style={{ textDecoration: "none" }}>
            &lt;&nbsp;
          </Link>
          카드 추가
        </h2>
        <div className="card-box">
          <div className="empty-card">
            <div className="card-top"></div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text">
                  {cardNumberSeries}&nbsp;{cardNumberCompany}&nbsp;
                  {masking(cardNumberIndividual)}&nbsp;
                  {masking(cardNumberCode)}
                </span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text">NAME</span>
                <span className="card-text">
                  {dueMonth} {dueMonth && "/"} {dueYear}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <div className="input-box">
            <input
              className="input-basic"
              type="text"
              onKeyUp={(event) => handleSeriesNumber(event)}
              maxLength="4"
            />
            {cardNumberSeries.length === 4 && "-"}
            <input
              className="input-basic"
              type="text"
              onKeyUp={(event) => handleCompanyNumber(event)}
              maxLength="4"
            />
            {cardNumberCompany.length === 4 && "-"}
            <input
              className="input-basic"
              type="password"
              onKeyUp={(event) => handleIndividualNumber(event)}
              maxLength="4"
            />
            {cardNumberIndividual.length === 4 && "-"}
            <input
              className="input-basic"
              type="paswword"
              onKeyUp={(event) => handleCodeNumber(event)}
              maxLength="4"
            />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <input
              className="input-basic"
              type="text"
              placeholder="MM"
              onKeyUp={(event) => handleMonth(event)}
              maxLength="2"
            />
            {dueMonth && "/"}
            <input
              className="input-basic"
              type="text"
              placeholder="YY"
              onKeyUp={(event) => handleYear(event)}
              maxLength="2"
            />
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
    </div>
  );
}

export default AddCard;
