import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CardContext } from "../Payments";
import Title from "../components/Title";
import InputCard from "../components/InputCard";
import Input from "../components/Input";
import Button from "../components/Button";

function AddCard() {
  const navigate = useNavigate();

  const { cards, setCards, id, setId } = useContext(CardContext);

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

  const masking = (maskingState, setMasking) => {
    setMasking(maskingState.replaceAll(/[\d]/g, "*"));
  };

  const resetState = (setState, setMaskingState) => {
    setState("");
    setMaskingState("");
  };

  const checkNumber = (event, number) => {
    switch (number) {
      case 1:
        if (/\d{1}/.test(event.target.value)) {
          return true;
        }
        break;
      case 2:
        if (/\d{2}/.test(event.target.value)) {
          return true;
        }
        break;
      case 3:
        if (/\d{3}/.test(event.target.value)) {
          return true;
        }
        break;
      case 4:
        if (/\d{4}/.test(event.target.value)) {
          return true;
        }
        break;
      default:
        break;
    }
  };

  const submit = (event) => {
    event.preventDefault();
    setCards([
      ...cards,
      {
        id,
        cardNumberSeries,
        cardNumberCompany,
        cardNumberIndividual,
        cardNumberCode,
        dueMonth,
        dueYear,
        name,
        cvc,
        passwordFirst,
        passwordSecond,
      },
    ]);
    setId(id + 1);
    navigate("/complete", {
      state: {
        id,
        cardNumberSeries,
        cardNumberCompany,
        cardNumberIndividual,
        cardNumberCode,
        dueMonth,
        dueYear,
        name,
        cvc,
        passwordFirst,
        passwordSecond,
      },
    });
  };

  return (
    <Root>
      <App>
        <Title>
          <Link to="/list" style={{ textDecoration: "none", color: "black" }}>
            &lt;&nbsp;
          </Link>
          카드 추가
        </Title>
        <InputCard
          cardNumberSeries={cardNumberSeries}
          cardNumberCompany={cardNumberCompany}
          individualMasking={individualMasking}
          codeMasking={codeMasking}
          name={name}
          dueMonth={dueMonth}
          dueYear={dueYear}
        />
        <form onSubmit={submit}>
          <InputContainer>
            <InputTitle>카드 번호</InputTitle>
            <InputBox>
              <Input
                type="text"
                placeholder="4자리 숫자"
                required
                maxLength="4"
                pattern="\d{4}"
                title="4자리 숫자를 입력하세요."
                onChange={(event) =>
                  checkNumber(event, 4) &&
                  handleSetState(event, setCardNumberSeries)
                }
              />
              {cardNumberSeries.length === 4 && "-"}
              <Input
                type="text"
                placeholder="4자리 숫자"
                required
                maxLength="4"
                pattern="\d{4}"
                title="4자리 숫자를 입력하세요."
                onChange={(event) =>
                  checkNumber(event, 4) &&
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
                title="4자리 숫자를 입력하세요."
                onChange={(event) => {
                  checkNumber(event, 4) &&
                    handleSetState(event, setCardNumberIndividual);
                  handleSetState(event, setIndividualMasking);
                }}
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
                title="4자리 숫자를 입력하세요."
                onChange={(event) => {
                  checkNumber(event, 4) &&
                    handleSetState(event, setCardNumberCode);
                  handleSetState(event, setCodeMasking);
                }}
                onBlur={() => masking(codeMasking, setCodeMasking)}
                onClick={() => resetState(setCardNumberCode, setCodeMasking)}
                value={codeMasking}
              />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>만료일</InputTitle>
            <InputBox width="50%">
              <Input
                type="number"
                placeholder="MM"
                required
                min="1"
                max="12"
                onChange={(event) =>
                  event.target.value >= 1 &&
                  event.target.value <= 12 &&
                  event.target.value.length === 2
                    ? handleSetState(event, setDueMonth)
                    : setDueMonth("0".concat(event.target.value))
                }
              />
              {dueMonth && "/"}
              <Input
                type="text"
                placeholder="YY"
                required
                maxLength="2"
                pattern="\d{2}"
                title="2자리 숫자를 입력하세요."
                onChange={(event) =>
                  checkNumber(event, 2) && handleSetState(event, setDueYear)
                }
              />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>
              카드 소유자 이름(선택)
              {name.length !== 0 && <span>{`${name.length}/30`}</span>}
            </InputTitle>
            <Input
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              required
              maxLength="30"
              pattern=".{1,30}"
              onChange={(event) => handleSetState(event, setName)}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>보안코드(CVC/CVV)</InputTitle>
            <Input
              type="text"
              width="25%"
              placeholder="3자리 숫자"
              required
              maxLength="3"
              pattern="[*]{3}"
              title="3자리 숫자를 입력하세요."
              onChange={(event) => {
                checkNumber(event, 3) && handleSetState(event, setCvc);
                handleSetState(event, setCvcMasking);
              }}
              onBlur={() => masking(cvcMasking, setCvcMasking)}
              onClick={() => resetState(setCvc, setCvcMasking)}
              value={cvcMasking}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>카드 비밀번호</InputTitle>
            <Input
              type="text"
              width="15%"
              placeholder="숫자"
              required
              maxLength="1"
              pattern="[*]{1}"
              title="1자리 숫자를 입력하세요."
              onChange={(event) => {
                checkNumber(event, 1) &&
                  handleSetState(event, setPasswordFirst);
                handleSetState(event, setFirstMasking);
              }}
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
              title="1자리 숫자를 입력하세요."
              onChange={(event) => {
                checkNumber(event, 1) &&
                  handleSetState(event, setPasswordSecond);
                handleSetState(event, setSecondMasking);
              }}
              onBlur={() => masking(secondMasking, setSecondMasking)}
              onClick={() => resetState(setPasswordSecond, setSecondMasking)}
              value={secondMasking}
            />
            <Input type="text" width="15%" value="*" disabled />
            <Input type="text" width="15%" value="*" disabled />
          </InputContainer>
          <Button>다음</Button>
        </form>
      </App>
    </Root>
  );
}

const Root = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
`;

const App = styled.div`
  height: 100%;
  padding: 16px 24px;
`;

const InputContainer = styled.div`
  margin: 16px 0;
`;

const InputBox = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

const InputTitle = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

export default AddCard;
