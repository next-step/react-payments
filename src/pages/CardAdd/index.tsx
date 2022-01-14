import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Root, PageTitle, App, InputTitle } from 'components/UI';
import { InputBox, InputContainer } from 'components/Input/input.style';
import { ButtonBox } from 'components/Button/button.style';
import Input from 'components/Input';
import Card from 'components/Card';
import Button from 'components/Button';
import { CardAddPageProps } from 'models/page.model';
import { FlexSpaceBetween } from 'components/UI/Utils';
import { InputErrorMessage } from 'components/UI/Typography';
import { ERROR_MESSAGE } from 'utils/validation';
import { replaceCardNumToDot } from 'utils';

const CardAddPage: React.VFC<CardAddPageProps> = ({
  cardCompany,
  expiredDate,
  cardNum,
  userName,
  CVC,
  cardPassword,
  updateCardNumber,
  updateExpiredDate,
  updateUserName,
  updateCVC,
  updateCardPassword,
}) => {
  const navigate = useNavigate();

  const cvcRef = useRef<HTMLInputElement>(null);
  const passwordFirstRef = useRef<HTMLInputElement>(null);
  const passwordSecondRef = useRef<HTMLInputElement>(null);

  const [cardNumError, setCardNumError] = useState(false);
  const [expiredDateError, setExpiredDateError] = useState(false);
  const [cvcError, setCvcError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const createDashBetweenCardNumber = (value: string) => {
    return value.length === 4 && '-';
  };

  useEffect(() => {
    if (expiredDate.month.length === 2 && expiredDate.year.length === 2) {
      cvcRef.current?.focus();
    }
  }, [expiredDate.month, expiredDate.year]);

  useEffect(() => {
    if (CVC.length === 3) {
      passwordFirstRef.current?.focus();
    }
  }, [CVC]);

  useEffect(() => {
    if (cardPassword.first.length === 1) {
      passwordSecondRef.current?.focus();
    }
  }, [cardPassword.first]);

  const checkValidationInputs = () => {
    const cardNumHasError =
      cardNum.first.length !== 4 ||
      cardNum.second.length !== 4 ||
      cardNum.third.length !== 4 ||
      cardNum.forth.length !== 4;

    const currentYear = new Date().getFullYear();
    const invalidMonth =
      expiredDate.month.length === 0 ||
      !(Number(expiredDate.month) <= 12 && Number(expiredDate.month) >= 1);
    const invalidYear =
      expiredDate.year.length === 0 ||
      Number(expiredDate.year) >= currentYear - 2000 + 5;
    const expiredDateHasError = invalidMonth || invalidYear;

    const cvcHasError = CVC.length !== 3;
    const passwordHasError = !cardPassword.first || !cardPassword.second;

    setCardNumError(cardNumHasError);
    setExpiredDateError(expiredDateHasError);
    setCvcError(cvcHasError);
    setPasswordError(passwordHasError);

    if (
      cardNumHasError ||
      expiredDateHasError ||
      cvcHasError ||
      passwordHasError
    ) {
      return false;
    } else {
      return true;
    }
  };

  const goNextStepToAddCard = () => {
    const isValidated = checkValidationInputs();
    if (isValidated) {
      navigate('/completed');
    }
  };

  return (
    <>
      <Root>
        <App>
          <PageTitle onClick={() => navigate('/list')}>
            &#60; 카드 추가
          </PageTitle>
          <Card
            cardCompany={cardCompany}
            expiredMonth={expiredDate.month}
            expiredYear={expiredDate.year}
            cardNumber={`${cardNum.first} ${
              cardNum.second
            } ${replaceCardNumToDot(cardNum.third)} ${replaceCardNumToDot(
              cardNum.forth,
            )}`}
            userName={userName}
          />
          <form>
            <InputContainer>
              <InputTitle>카드 번호</InputTitle>
              <InputBox>
                <Input
                  type="number"
                  name="first"
                  value={cardNum.first}
                  onChange={updateCardNumber}
                />
                {createDashBetweenCardNumber(cardNum.first)}
                <Input
                  type="number"
                  name="second"
                  value={cardNum.second}
                  onChange={updateCardNumber}
                />
                {createDashBetweenCardNumber(cardNum.second)}
                <Input
                  type="number"
                  name="third"
                  value={cardNum.third}
                  onChange={updateCardNumber}
                  isPassword
                />
                {createDashBetweenCardNumber(cardNum.third)}
                <Input
                  type="number"
                  name="forth"
                  value={cardNum.forth}
                  onChange={updateCardNumber}
                  isPassword
                />
              </InputBox>
              {cardNumError && (
                <InputErrorMessage>
                  {ERROR_MESSAGE.CARD_NUMBER}
                </InputErrorMessage>
              )}
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
                {expiredDate.month.length === 2 && '/'}
                <Input
                  type="number"
                  placeholder="YY"
                  name="year"
                  value={expiredDate.year}
                  onChange={updateExpiredDate}
                />
              </InputBox>
              {expiredDateError && (
                <InputErrorMessage>
                  {ERROR_MESSAGE.EXPIRED_DATES}
                </InputErrorMessage>
              )}
            </InputContainer>
            <InputContainer>
              <FlexSpaceBetween>
                <InputTitle>카드 소유자 이름(선택)</InputTitle>
                <InputTitle>({userName.length}/30)</InputTitle>
              </FlexSpaceBetween>
              <Input
                type="text"
                placeholder="카드에 표시된 이름과 동일하게 입력하세요."
                value={userName}
                onChange={updateUserName}
              />
            </InputContainer>
            <InputContainer>
              <InputTitle>보안코드(CVC/CVV)</InputTitle>
              <div>
                <Input
                  width={25}
                  type="number"
                  value={CVC}
                  onChange={updateCVC}
                  ref={cvcRef}
                  isPassword
                />
              </div>
              {cvcError && (
                <InputErrorMessage>{ERROR_MESSAGE.CVC}</InputErrorMessage>
              )}
            </InputContainer>
            <InputContainer>
              <InputTitle>카드 비밀번호</InputTitle>
              <div>
                <Input
                  width={15}
                  type="number"
                  name="first"
                  value={cardPassword.first}
                  onChange={updateCardPassword}
                  ref={passwordFirstRef}
                  isPassword
                />
                <Input
                  width={15}
                  type="number"
                  name="second"
                  value={cardPassword.second}
                  onChange={updateCardPassword}
                  ref={passwordSecondRef}
                  isPassword
                />
                <Input
                  width={15}
                  type="number"
                  name="third"
                  value={cardPassword.third}
                  isPassword
                  readOnly
                />
                <Input
                  width={15}
                  type="number"
                  name="forth"
                  value={cardPassword.forth}
                  isPassword
                  readOnly
                />
              </div>
              {passwordError && (
                <InputErrorMessage>
                  {ERROR_MESSAGE.CARD_PASSWORD}
                </InputErrorMessage>
              )}
            </InputContainer>
          </form>
          <ButtonBox>
            <Button onClick={goNextStepToAddCard} />
          </ButtonBox>
        </App>
      </Root>
    </>
  );
};

export default CardAddPage;
