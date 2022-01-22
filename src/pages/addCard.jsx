import { useState } from "react";
import { Link } from "react-router-dom";

function AddCard() {
  const [cardNumberSeries, setCardNumberSeries] = useState("");
  const [cardNumberCompany, setCardNumberCompany] = useState("");
  const [cardNumberIndividual, setCardNumberIndividual] = useState("");
  const [cardNumberCode, setCardNumberCode] = useState("");

  const checkNumber = (event) => {
    if (typeof event.target.value !== Number) {
      event.target.value = event.target.value.replace(/[^0-9.]/g, "");
    }
  };

  const seriesNumber = (event) => {
    checkNumber(event);
    setCardNumberSeries(event.target.value);
  };

  const companyNumber = (event) => {
    checkNumber(event);
    setCardNumberCompany(event.target.value);
  };

  const individualNumber = (event) => {
    checkNumber(event);
    setCardNumberIndividual(event.target.value);
  };

  const codeNumber = (event) => {
    checkNumber(event);
    setCardNumberCode(event.target.value);
  };

  const masking = (value) => {
    return value.replaceAll(/[0-9]/g, "*");
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
                <span className="card-text">MM / YY</span>
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
              onKeyUp={(event) => seriesNumber(event)}
              maxLength="4"
            />
            {cardNumberSeries.length === 4 && "-"}
            <input
              className="input-basic"
              type="text"
              onKeyUp={(event) => companyNumber(event)}
              maxLength="4"
            />
            {cardNumberCompany.length === 4 && "-"}
            <input
              className="input-basic"
              type="password"
              onKeyUp={(event) => individualNumber(event)}
              maxLength="4"
            />
            {cardNumberIndividual.length === 4 && "-"}
            <input
              className="input-basic"
              type="paswword"
              onKeyUp={(event) => codeNumber(event)}
              maxLength="4"
            />
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
    </div>
  );
}

export default AddCard;
