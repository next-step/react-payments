import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import { PageTitle } from '../common/styles';
import { ButtonBox } from '../components/Button/styles';
import {
  InputContainer,
  InputTitle,
  InputBox,
  ErrorMessage,
  OwnerLength,
} from '../components/Input/styles';
import { ERROR_MESSAGE } from '../constants';
import { useNavigate } from 'react-router';

const Add = () => {
  const history = useNavigate();

  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [expirationNumber, setExpirationNumber] = useState<string[]>(['', '']);
  const [owner, setOwner] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [password, setPassword] = useState<string[]>(['', '']);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [expirationMonthError, setExpirationMonthError] =
    useState<boolean>(false);
  const [cardNumberPasswordError, setCardNumberPasswordError] = useState<
    boolean[]
  >([false, false]);
  const [cvcError, setCvcError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean[]>([false, false]);
  const [isCardColorSelected, setIsCardColorSelected] =
    useState<boolean>(false);

  useEffect(() => {
    if (
      cardNumber[0].length === 4 &&
      cardNumber[1].length === 4 &&
      !isCardColorSelected
    )
      setIsModalOpen(true);
  }, [cardNumber]);

  const onChangeCardNumber = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedCardNumber = [...cardNumber];
    updatedCardNumber[index] = event.target.value.substring(0, 4);
    setCardNumber([...updatedCardNumber]);
  };

  const onChangeExpirationNumber = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedCvcNumber = [...expirationNumber];
    updatedCvcNumber[index] = event.target.value.substring(0, 2);
    setExpirationNumber([...updatedCvcNumber]);
  };

  const onChangeOwner = (event: ChangeEvent<HTMLInputElement>) => {
    setOwner(event.target.value);
  };
  const onChangeCvc = (event: ChangeEvent<HTMLInputElement>) => {
    setCvc(event.target.value.substring(0, 3));
  };

  const onChangePassword = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedPasswordNumber = [...password];
    updatedPasswordNumber[index] = event.target.value;
    setPassword([...updatedPasswordNumber]);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setIsCardColorSelected(true);
  };

  const onClickChangeColorCard = () => {
    setIsModalOpen(true);
    setIsCardColorSelected(false);
  };

  const onClickBackButton = () => {
    history('/list');
  };

  const onClickNextButton = () => {
    history('/alias');
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    // 카드 번호 뒤의 비밀번호 유효성 검사
    const copyCardNumberPasswordError = [...cardNumberPasswordError];

    if (isNaN(Number(cardNumber[2]))) copyCardNumberPasswordError[0] = true;
    else copyCardNumberPasswordError[0] = false;

    if (isNaN(Number(cardNumber[3]))) copyCardNumberPasswordError[1] = true;
    else copyCardNumberPasswordError[1] = false;

    setCardNumberPasswordError([...copyCardNumberPasswordError]);

    // 만료일 (월) 유효성 검사
    const mm = Number(expirationNumber[0]);

    if (mm >= 1 && mm <= 12) setExpirationMonthError(false);
    else setExpirationMonthError(true);

    // cvc 비밀번호 유효성 검사
    if (isNaN(Number(cvc))) setCvcError(true);
    else setCvcError(false);

    // 비밀번호 유효성 검사
    // 카드 번호 뒤의 비밀번호 유효성 검사
    const copyPasswordError = [...passwordError];

    if (isNaN(Number(password[0]))) copyPasswordError[0] = true;
    else copyPasswordError[0] = false;

    if (isNaN(Number(password[1]))) copyPasswordError[1] = true;
    else copyPasswordError[1] = false;

    setPasswordError([...copyPasswordError]);
  };

  return (
    <Layout>
      <PageTitle>
        <Button label="<" width={7} onClick={onClickBackButton} />
        카드 추가
      </PageTitle>

      <Card
        type="add"
        cardNumber={cardNumber}
        expirationNumber={expirationNumber}
        owner={owner}
        onClick={onClickChangeColorCard}
      />
      <form onSubmit={onSubmit}>
        <InputContainer>
          <InputTitle>카드 번호</InputTitle>
          <InputBox>
            <Input
              type="number"
              value={cardNumber[0]}
              onChange={(e) => onChangeCardNumber(e, 0)}
              required
            />
            {cardNumber[0].length === 4 ? '-' : ''}
            <Input
              type="number"
              value={cardNumber[1]}
              onChange={(e) => onChangeCardNumber(e, 1)}
              required
            />
            {cardNumber[1].length === 4 ? '-' : ''}
            <Input
              type="password"
              value={cardNumber[2]}
              maxLength={4}
              minLength={4}
              onChange={(e) => onChangeCardNumber(e, 2)}
              error={cardNumberPasswordError[0]}
              required
            />
            {cardNumber[2].length === 4 ? '-' : ''}
            <Input
              type="password"
              value={cardNumber[3]}
              maxLength={4}
              minLength={4}
              onChange={(e) => onChangeCardNumber(e, 3)}
              error={cardNumberPasswordError[1]}
              required
            />
          </InputBox>
          {(cardNumberPasswordError[0] || cardNumberPasswordError[1]) && (
            <ErrorMessage>{ERROR_MESSAGE.ONLY_NUMBER}</ErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <InputTitle>만료일</InputTitle>
          <InputBox width={50}>
            <Input
              type="number"
              value={expirationNumber[0]}
              max={12}
              min={1}
              onChange={(e) => onChangeExpirationNumber(e, 0)}
              placeholder="MM"
              error={expirationMonthError}
              required
            />
            {expirationNumber[0].length === 2 ? '/' : ''}
            <Input
              type="number"
              value={expirationNumber[1]}
              onChange={(e) => onChangeExpirationNumber(e, 1)}
              placeholder="YY"
              required
            />
          </InputBox>
          {expirationMonthError && (
            <ErrorMessage>{ERROR_MESSAGE.MONTH_OUT_OF_RANGE}</ErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <InputTitle>
            <span>카드 소유자 이름(선택)</span>
            <span>{owner.length}/30</span>
          </InputTitle>
          <Input
            type="text"
            value={owner}
            maxLength={30}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            onChange={onChangeOwner}
            required={false}
            textAlign="left"
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>보안코드(CVC/CVV)</InputTitle>
          <Input
            type="password"
            value={cvc}
            onChange={onChangeCvc}
            required
            width={25}
            error={cvcError}
          />
          {cvcError && <ErrorMessage>{ERROR_MESSAGE.ONLY_NUMBER}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <InputTitle>카드 비밀번호</InputTitle>
          <Input
            type="password"
            value={password[0]}
            maxLength={1}
            minLength={1}
            onChange={(e) => onChangePassword(e, 0)}
            width={15}
            error={passwordError[0]}
            required
          />
          &nbsp;
          <Input
            type="password"
            value={password[1]}
            maxLength={1}
            minLength={1}
            onChange={(e) => onChangePassword(e, 1)}
            width={15}
            error={passwordError[1]}
            required
          />
          &nbsp;
          <Input type="password" value={' '} onChange={() => {}} width={15} />
          &nbsp;
          <Input type="password" value={' '} onChange={() => {}} width={15} />
          &nbsp;
          {(passwordError[0] || passwordError[1]) && (
            <ErrorMessage>{ERROR_MESSAGE.ONLY_NUMBER}</ErrorMessage>
          )}
        </InputContainer>

        <Button label="다음" onClick={onClickNextButton} />
      </form>
      <Modal
        open={isModalOpen}
        onClose={onCloseModal}
        onClickSpace={onCloseModal}
      />
    </Layout>
  );
};

export default Add;
