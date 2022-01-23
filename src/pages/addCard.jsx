import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../stories/Title";
import Button from "../stories/Button";
import Input from "../stories/Input";

function AddCard() {
  const [cardNumberSeries, setCardNumberSeries] = useState("");
  const [cardNumberCompany, setCardNumberCompany] = useState("");
  const [cardNumberIndividual, setCardNumberIndividual] = useState("");
  const [cardNumberCode, setCardNumberCode] = useState("");
  const [dueMonth, setDueMonth] = useState("");
  const [dueYear, setDueYear] = useState("");
  const [name, setName] = useState("");

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

  const handleName = (event) => {
    if (event.target.value.length > 30) {
      event.target.value = event.target.value.slice(0, 30);
    }
    setName(event.target.value);
  };

  return (
    <div className="root">
      <div className="app">
        <Title>
          <Link to="/list" style={{ textDecoration: "none", color: "black" }}>
            &lt;&nbsp;
          </Link>
          카드 추가
        </Title>
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
                <span className="card-text">
                  {name.length === 0 && "NAME"}
                  {name.length !== 0 && name}
                </span>
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
            <Input
              type="text"
              maxLength="4"
              handle={(event) => handleSeriesNumber(event)}
            />
            {cardNumberSeries.length === 4 && "-"}
            <Input
              type="text"
              maxLength="4"
              handle={(event) => handleCompanyNumber(event)}
            />
            {cardNumberCompany.length === 4 && "-"}
            <Input
              type="password"
              maxLength="4"
              handle={(event) => handleIndividualNumber(event)}
            />
            {cardNumberIndividual.length === 4 && "-"}
            <Input
              type="password"
              maxLength="4"
              handle={(event) => handleCodeNumber(event)}
            />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <Input
              type="text"
              placeholder="MM"
              maxLength="2"
              handle={(event) => handleMonth(event)}
            />
            {dueMonth && "/"}
            <Input
              type="text"
              placeholder="YY"
              maxLength="2"
              handle={(event) => handleYear(event)}
            />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">
            카드 소유자 이름(선택)
            {name.length !== 0 && <span>{`${name.length}/30`}</span>}
          </span>
          <Input
            type="text"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength="30"
            handle={(event) => handleName(event)}
          />
        </div>
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <Input
            type="password"
            width="25%"
            maxLength="3"
            handle={(event) => checkNumber(event)}
          />
        </div>
        <div className="input-container">
          <span className="input-title">카드 비밀번호</span>
          <Input
            type="password"
            width="15%"
            maxLength="1"
            handle={(event) => checkNumber(event)}
          />
          <Input
            type="password"
            width="15%"
            maxLength="1"
            handle={(event) => checkNumber(event)}
          />
          <Input type="password" width="15%" value="0" disabled />
          <Input type="password" width="15%" value="0" disabled />
        </div>
        <div className="button-box">
          <Link
            to="complete"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button>다음</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
