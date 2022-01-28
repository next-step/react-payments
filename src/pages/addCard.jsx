import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

function AddCard() {
  const [cardNumberSeries, setCardNumberSeries] = useState("");
  const [cardNumberCompany, setCardNumberCompany] = useState("");
  const [cardNumberIndividual, setCardNumberIndividual] = useState("");
  const [individualMasking, setIndividualMasking] = useState("");
  const [cardNumberCode, setCardNumberCode] = useState("");
  const [codeMasking, setCodeMasking] = useState("");
  const [dueMonth, setDueMonth] = useState("");
  const [dueYear, setDueYear] = useState("");
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [cvcMasking, setCvcMasking] = useState("");
  const [passwordFirst, setPasswordFirst] = useState("");
  const [firstMasking, setFirstMasking] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");
  const [secondMasking, setSecondMasking] = useState("");

  const handleSetState = (event, setState) => {
    setState(event.target.value);
  };

  const handleSetStateWithMasking = (event, setState, setMaskingState) => {
    setState(event.target.value);
    setMaskingState(event.target.value);
  };

  const masking = (maskingState, setMasking) => {
    setMasking(maskingState.replaceAll(/[\d]/g, "*"));
  };

  const resetState = (setState, setMaskingState) => {
    setState("");
    setMaskingState("");
  };

  //WARNING 임시 제거
  useEffect(() => {}, [cardNumberCode, cvc, passwordFirst, passwordSecond]);

  return (
    <div className="root">
      <div className="app">
        <Title>
          <Link to="/list" style={{ textDecoration: "none", color: "black" }}>
            &lt;&nbsp;
          </Link>
          카드 추가
        </Title>
        <Card
          cardNumberSeries={cardNumberSeries}
          cardNumberCompany={cardNumberCompany}
          individualMasking={individualMasking}
          codeMasking={codeMasking}
          name={name}
          dueMonth={dueMonth}
          dueYear={dueYear}
        />
        <form action="/complete">
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <div className="input-box">
              <Input
                type="text"
                placeholder="4자리 숫자"
                required
                maxLength="4"
                pattern="\d{4}"
                onChange={(event) => handleSetState(event, setCardNumberSeries)}
              />
              {cardNumberSeries.length === 4 && "-"}
              <Input
                type="text"
                placeholder="4자리 숫자"
                required
                maxLength="4"
                pattern="\d{4}"
                onChange={(event) =>
                  handleSetState(event, setCardNumberCompany)
                }
              />
              {cardNumberCompany.length === 4 && "-"}
              <Input
                type="text"
                placeholder="4자리 숫자"
                required
                maxLength="4"
                pattern="[*]{4}"
                onChange={(event) =>
                  handleSetStateWithMasking(
                    event,
                    setCardNumberIndividual,
                    setIndividualMasking
                  )
                }
                onBlur={() => masking(individualMasking, setIndividualMasking)}
                onClick={() =>
                  resetState(setCardNumberIndividual, setIndividualMasking)
                }
                value={individualMasking}
              />
              {cardNumberIndividual.length === 4 && "-"}
              <Input
                type="text"
                placeholder="4자리 숫자"
                required
                maxLength="4"
                pattern="[*]{4}"
                onChange={(event) =>
                  handleSetStateWithMasking(
                    event,
                    setCardNumberCode,
                    setCodeMasking
                  )
                }
                onBlur={() => masking(codeMasking, setCodeMasking)}
                onClick={() => resetState(setCardNumberCode, setCodeMasking)}
                value={codeMasking}
              />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <div className="input-box w-50">
              <Input
                type="number"
                placeholder="MM"
                required
                maxLength="2"
                min="1"
                max="12"
                pattern="\d{2}"
                onChange={(event) => handleSetState(event, setDueMonth)}
              />
              {dueMonth && "/"}
              <Input
                type="text"
                placeholder="YY"
                required
                maxLength="2"
                pattern="\d{2}"
                onChange={(event) => handleSetState(event, setDueYear)}
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
              required
              maxLength="30"
              pattern=".{1,30}"
              onChange={(event) => handleSetState(event, setName)}
            />
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <Input
              type="text"
              width="25%"
              placeholder="3자리 숫자"
              required
              maxLength="3"
              pattern="[*]{3}"
              onChange={(event) =>
                handleSetStateWithMasking(event, setCvc, setCvcMasking)
              }
              onBlur={() => masking(cvcMasking, setCvcMasking)}
              onClick={() => resetState(setCvc, setCvcMasking)}
              value={cvcMasking}
            />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <Input
              type="text"
              width="15%"
              placeholder="숫자"
              required
              maxLength="1"
              pattern="[*]{1}"
              onChange={(event) =>
                handleSetStateWithMasking(
                  event,
                  setPasswordFirst,
                  setFirstMasking
                )
              }
              onBlur={() => masking(firstMasking, setFirstMasking)}
              onClick={() => resetState(setPasswordFirst, setFirstMasking)}
              value={firstMasking}
            />
            <Input
              type="text"
              width="15%"
              placeholder="숫자"
              required
              maxLength="1"
              pattern="[*]{1}"
              onChange={(event) =>
                handleSetStateWithMasking(
                  event,
                  setPasswordSecond,
                  setSecondMasking
                )
              }
              onBlur={() => masking(secondMasking, setSecondMasking)}
              onClick={() => resetState(setPasswordSecond, setSecondMasking)}
              value={secondMasking}
            />
            <Input type="password" width="15%" value="0" disabled />
            <Input type="password" width="15%" value="0" disabled />
          </div>
          <Button>다음</Button>
        </form>
      </div>
    </div>
  );
}

export default AddCard;
