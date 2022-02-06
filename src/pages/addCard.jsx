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
  const [passwordFirst, setPasswordFirst] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");

  const handleSetState = (event, setState) => {
    setState(event.target.value);
  };

  const handleSetMaskingState = (event, setMaskingState) => {
    setMaskingState(event.target.value.replaceAll(/[\d]/g, "*"));
  };

  const resetState = (setState, setMaskingState) => {
    setState("");
    setMaskingState("");
  };

  const submit = (event) => {
    event.preventDefault();
    setCards([
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
      ...cards,
    ]);
    setId(id + 1);
    navigate("/complete");
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
                onChange={(event) => handleSetState(event, setCardNumberSeries)}
                required
                maxLength="4"
                pattern="\d{4}"
                title="4자리 숫자를 입력하세요."
              />
              {cardNumberSeries.length === 4 && "-"}
              <Input
                type="text"
                placeholder="4자리 숫자"
                onChange={(event) =>
                  handleSetState(event, setCardNumberCompany)
                }
                required
                maxLength="4"
                pattern="\d{4}"
                title="4자리 숫자를 입력하세요."
              />
              {cardNumberCompany.length === 4 && "-"}
              <Input
                type="password"
                placeholder="4자리 숫자"
                onChange={(event) => {
                  handleSetState(event, setCardNumberIndividual);
                  handleSetMaskingState(event, setIndividualMasking);
                }}
                required
                maxLength="4"
                pattern="\d{4}"
                title="4자리 숫자를 입력하세요."
                onClick={() =>
                  resetState(setCardNumberIndividual, setIndividualMasking)
                }
                value={cardNumberIndividual}
              />
              {cardNumberIndividual.length === 4 && "-"}
              <Input
                type="password"
                placeholder="4자리 숫자"
                onChange={(event) => {
                  handleSetState(event, setCardNumberCode);
                  handleSetMaskingState(event, setCodeMasking);
                }}
                required
                maxLength="4"
                pattern="\d{4}"
                title="4자리 숫자를 입력하세요."
                onClick={() => resetState(setCardNumberCode, setCodeMasking)}
                value={cardNumberCode}
              />
              <TooltipText>4자리씩 16자리 숫자를 입력해주세요.</TooltipText>
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>만료일</InputTitle>
            <InputBox width="50%">
              <Input
                type="number"
                placeholder="MM"
                onChange={(event) =>
                  event.target.value >= 1 &&
                  event.target.value <= 12 &&
                  event.target.value.length === 2
                    ? handleSetState(event, setDueMonth)
                    : setDueMonth("0".concat(event.target.value))
                }
                required
                min="1"
                max="12"
                title="1이상 12이하 숫자를 입력하세요."
              />
              {dueMonth && "/"}
              <Input
                type="text"
                placeholder="YY"
                onChange={(event) => handleSetState(event, setDueYear)}
                required
                maxLength="2"
                pattern="\d{2}"
                title="2자리 숫자를 입력하세요."
              />
              <TooltipText>월/년을 2자리 숫자로 입력해주세요.</TooltipText>
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>
              카드 소유자 이름(선택)
              {name.length !== 0 && <span>{`${name.length}/30`}</span>}
            </InputTitle>
            <InputBox>
              <Input
                type="text"
                placeholder="카드에 표시된 이름과 동일하게 입력하세요."
                onChange={(event) => handleSetState(event, setName)}
                maxLength="30"
                pattern=".{1,30}"
              />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>보안코드(CVC/CVV)</InputTitle>
            <InputBox width="25%">
              <Input
                type="password"
                placeholder="3자리 숫자"
                onChange={(event) => {
                  handleSetState(event, setCvc);
                }}
                required
                maxLength="3"
                pattern="\d{3}"
                title="3자리 숫자를 입력하세요."
                onClick={() => setCvc("")}
                value={cvc}
              />
              <TooltipText>3자리 숫자를 입력해 주세요.</TooltipText>
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>카드 비밀번호</InputTitle>
            <InputBox width="60%">
              <Input
                type="password"
                placeholder="숫자"
                onChange={(event) => {
                  handleSetState(event, setPasswordFirst);
                }}
                required
                maxLength="1"
                pattern="\d{1}"
                title="1자리 숫자를 입력하세요."
                onClick={() => setPasswordFirst("")}
                value={passwordFirst}
              />
              <Input
                type="password"
                placeholder="숫자"
                onChange={(event) => {
                  handleSetState(event, setPasswordSecond);
                }}
                required
                maxLength="1"
                pattern="\d{1}"
                title="1자리 숫자를 입력하세요."
                onClick={() => setPasswordSecond("")}
                value={passwordSecond}
              />
              <Input type="password" value="0" disabled />
              <Input type="password" value="0" disabled />
              <TooltipText>
                비밀번호 숫자 앞 2자리를 1자리씩 입력해주세요.
              </TooltipText>
            </InputBox>
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

const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  top: 45px;
  z-index: 1;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
  &:focus-within ${TooltipText} {
    visibility: visible;
  }
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
