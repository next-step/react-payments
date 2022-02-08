import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import { PageTitle } from '../common/styles';
import {
  InputContainer,
  InputTitle,
  InputBox,
  ErrorMessage,
} from '../components/Input/styles';
import { ERROR_MESSAGE } from '../constants';
import { useNavigate } from 'react-router';
import { CardContext } from '../context/CardContext';
import { isValidNumber } from '../utils';

const Add = () => {
  const history = useNavigate();

  const {
    card,
    onChangeCardCompany,
    onChangeCardNumber,
    onChangeExpirationNumber,
    onChangeOwner,
    onChangeCvc,
    onChangePassword,
  } = useContext(CardContext);
  const { cardNumber, expirationNumber, ownerName, cvc, password, company } =
    card;

  const [formErrors, setFormErrors] = useState({
    cardNumbers: [false, false, false, false],
    expirationMonth: false,
    cvc: false,
    passwords: [false, false],
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCardColorSelected, setIsCardColorSelected] =
    useState<boolean>(false);

  useEffect(() => {
    if (
      cardNumber[0].length === 4 &&
      cardNumber[1].length === 4 &&
      !isCardColorSelected
    )
      setIsModalOpen(true);
  }, [cardNumber, isCardColorSelected]);

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

  const setDivisionValue = (
    target: string,
    length: number,
    returnValue: string
  ) => {
    return target.length === length ? returnValue : '';
  };

  const checkCardNumberValidation = useCallback(() => {
    const copyCardNumbers = [...formErrors.cardNumbers];

    cardNumber.forEach((number, index) => {
      if (isValidNumber(number)) copyCardNumbers[index] = true;
      else copyCardNumbers[index] = false;
    });

    if (
      formErrors.cardNumbers.every(
        (value, index) => value === copyCardNumbers[index]
      )
    )
      return;

    setFormErrors({ ...formErrors, cardNumbers: [...copyCardNumbers] });
  }, [cardNumber, formErrors]);

  const checkExpirationNumberValidation = useCallback(() => {
    const mm = Number(expirationNumber[0]);
    if (!mm || (mm >= 1 && mm <= 12) !== formErrors.expirationMonth) return;

    if (mm >= 1 && mm <= 12)
      setFormErrors({ ...formErrors, expirationMonth: false });
    else setFormErrors({ ...formErrors, expirationMonth: true });
  }, [expirationNumber, formErrors]);

  const checkCvcValidation = useCallback(() => {
    if (isValidNumber(cvc) === formErrors.cvc) return;

    if (isValidNumber(cvc)) setFormErrors({ ...formErrors, cvc: true });
    else setFormErrors({ ...formErrors, cvc: false });
  }, [cvc, formErrors]);

  const checkPasswordValidation = useCallback(() => {
    const copyPasswords = [...formErrors.passwords];

    password.forEach((value, index) => {
      if (isValidNumber(value)) copyPasswords[index] = true;
      else copyPasswords[index] = false;
    });

    if (
      formErrors.passwords.every(
        (value, index) => value === copyPasswords[index]
      )
    )
      return;

    setFormErrors({ ...formErrors, passwords: copyPasswords });
  }, [formErrors, password]);

  const checkCardNumberError = () =>
    formErrors.cardNumbers[0] ||
    formErrors.cardNumbers[1] ||
    formErrors.cardNumbers[2] ||
    formErrors.cardNumbers[3];

  useEffect(() => {
    checkCardNumberValidation();
  }, [cardNumber, checkCardNumberValidation]);

  useEffect(() => {
    checkExpirationNumberValidation();
  }, [expirationNumber, checkExpirationNumberValidation]);

  useEffect(() => {
    checkCvcValidation();
  }, [cvc, checkCvcValidation]);

  useEffect(() => {
    checkPasswordValidation();
  }, [password, checkPasswordValidation]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const isFormError = Object.values(formErrors)
      .flat()
      .filter((value) => value).length;

    if (!isFormError) {
      history('/alias', {
        state: {
          type: 'add',
        },
      });
    }
  };

  return (
    <Layout>
      <PageTitle>
        <Button label="<" width={7} onClick={onClickBackButton} />
        카드 추가
      </PageTitle>

      <Card
        type="add"
        size="small"
        cardNumber={cardNumber}
        expirationNumber={expirationNumber}
        owner={ownerName}
        onClick={onClickChangeColorCard}
        company={company}
      />
      <form onSubmit={onSubmit}>
        <InputContainer>
          <InputTitle>카드 번호</InputTitle>
          <InputBox>
            <Input
              type="text"
              value={cardNumber[0]}
              maxLength={4}
              minLength={4}
              onChange={(e) => onChangeCardNumber(e, 0)}
              error={formErrors.cardNumbers[0]}
              required
            />
            {setDivisionValue(cardNumber[0], 4, '-')}
            <Input
              type="text"
              maxLength={4}
              minLength={4}
              value={cardNumber[1]}
              onChange={(e) => onChangeCardNumber(e, 1)}
              error={formErrors.cardNumbers[1]}
              required
            />
            {setDivisionValue(cardNumber[1], 4, '-')}
            <Input
              type="password"
              value={cardNumber[2]}
              maxLength={4}
              minLength={4}
              onChange={(e) => onChangeCardNumber(e, 2)}
              error={formErrors.cardNumbers[2]}
              required
            />
            {setDivisionValue(cardNumber[2], 4, '-')}
            <Input
              type="password"
              value={cardNumber[3]}
              maxLength={4}
              minLength={4}
              onChange={(e) => onChangeCardNumber(e, 3)}
              error={formErrors.cardNumbers[3]}
              required
            />
          </InputBox>
          {checkCardNumberError() && (
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
              error={formErrors.expirationMonth}
              required
            />
            {setDivisionValue(expirationNumber[0], 2, '/')}
            <Input
              type="number"
              value={expirationNumber[1]}
              onChange={(e) => onChangeExpirationNumber(e, 1)}
              placeholder="YY"
              required
            />
          </InputBox>
          {formErrors.expirationMonth && (
            <ErrorMessage>{ERROR_MESSAGE.MONTH_OUT_OF_RANGE}</ErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <InputTitle>
            <span>카드 소유자 이름(선택)</span>
            <span>{ownerName.length}/30</span>
          </InputTitle>
          <Input
            type="text"
            value={ownerName}
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
            maxLength={3}
            minLength={3}
            width={25}
            error={formErrors.cvc}
          />
          {formErrors.cvc && (
            <ErrorMessage>{ERROR_MESSAGE.ONLY_NUMBER}</ErrorMessage>
          )}
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
            error={formErrors.passwords[0]}
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
            error={formErrors.passwords[1]}
            required
          />
          &nbsp;
          <Input type="password" value={' '} onChange={() => {}} width={15} />
          &nbsp;
          <Input type="password" value={' '} onChange={() => {}} width={15} />
          &nbsp;
          {(formErrors.passwords[0] || formErrors.passwords[1]) && (
            <ErrorMessage>{ERROR_MESSAGE.ONLY_NUMBER}</ErrorMessage>
          )}
        </InputContainer>

        <Button label="다음" />
      </form>
      <Modal
        open={isModalOpen}
        onClose={onCloseModal}
        setCardCompany={onChangeCardCompany}
      />
    </Layout>
  );
};

export default Add;
