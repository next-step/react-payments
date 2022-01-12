import React, { useCallback, useState } from 'react';
import { Root, PageTitle, App, InputTitle } from 'components/UI';
import Input from 'components/Input';
import { InputBox, InputContainer } from 'components/Input/input.style';
import { ButtonBox, ButtonText } from 'components/Button/button.style';
import Card from 'components/Card';

const CardAddContainer: React.VFC = () => {
  const [cardName, setCardName] = useState('');
  const [expiredDate, setExpiredDate] = useState({
    month: '',
    year: '',
  });
  const [cardNum, setCardNum] = useState({
    first: '',
    second: '',
    third: '',
    forth: '',
  });
  const [userName, setUserName] = useState('');
  const [securityNumber, setSecurityNumber] = useState('');
  const [cardPassword, setCardPassword] = useState({
    first: '',
    second: '',
    third: '',
    forth: '',
  });

  const updateCardNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCardNum({
        ...cardNum,
        [e.target.name]: e.target.value,
      });
    },
    [cardNum],
  );

  const updateExpiredDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setExpiredDate({
        ...expiredDate,
        [e.target.name]: e.target.value,
      });
    },
    [expiredDate],
  );

  const updateCardPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCardPassword({
        ...cardPassword,
        [e.target.name]: e.target.value,
      });
    },
    [cardPassword],
  );

  return (
    <>
      {/* 수정 중인 곳 */}
      <Root>
        <App>
          <PageTitle>&#60; 카드 추가</PageTitle>
          <Card
            cardName={cardName}
            expiredMonth={expiredDate.month}
            expiredYear={expiredDate.year}
            cardNumber={`${cardNum.first}${cardNum.second}${cardNum.third}${cardNum.forth}`}
            userName={userName}
          />
          <InputContainer>
            <InputTitle>카드 번호</InputTitle>
            <InputBox>
              <Input
                type="text"
                name="first"
                value={cardNum.first}
                onChange={updateCardNumber}
              />
              <Input
                type="text"
                name="second"
                value={cardNum.second}
                onChange={updateCardNumber}
              />
              <Input
                type="password"
                name="third"
                value={cardNum.third}
                onChange={updateCardNumber}
              />
              <Input
                type="password"
                name="forth"
                value={cardNum.forth}
                onChange={updateCardNumber}
              />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>만료일</InputTitle>
            <InputBox width={50}>
              <Input
                type="number"
                placeholder="MM"
                name="month"
                value={expiredDate.month}
                onChange={updateExpiredDate}
              />
              <Input
                type="text"
                placeholder="YY"
                name="year"
                value={expiredDate.year}
                onChange={updateExpiredDate}
              />
            </InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>카드 소유자 이름(선택)</InputTitle>
            <Input
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>보안코드(CVC/CVV)</InputTitle>
            <Input
              width={25}
              type="password"
              value={securityNumber}
              onChange={(e) => setSecurityNumber(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>카드 비밀번호</InputTitle>
            <Input
              width={15}
              type="password"
              name="first"
              value={cardPassword.first}
              onChange={updateCardPassword}
            />
            <Input
              width={15}
              type="password"
              name="second"
              value={cardPassword.second}
              onChange={updateCardPassword}
            />
            <Input
              width={15}
              type="password"
              name="third"
              value={cardPassword.third}
              onChange={updateCardPassword}
            />
            <Input
              width={15}
              type="password"
              name="forth"
              value={cardPassword.forth}
              onChange={updateCardPassword}
            />
          </InputContainer>
          <ButtonBox>
            <ButtonText>다음</ButtonText>
          </ButtonBox>
        </App>
      </Root>
    </>
  );
};

export default CardAddContainer;
