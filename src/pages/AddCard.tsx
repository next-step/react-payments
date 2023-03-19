import { ChangeEvent, RefObject, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Card } from '../components';
import { CardNumber } from '../components/Card/Card';
import { CreditCard, PaymentsContext } from '../context/PaymentsContext';
import useRefObjects from '../hooks/useRefObjects';
import {
  areAllRefsMaxLength,
  extractNumbers,
  isValidExpiryDate,
} from '../utils';

const AddCard = () => {
  const { addCard } = useContext(PaymentsContext);
  const navigate = useNavigate();
  const cardRefs = useRefObjects<HTMLInputElement>(4);
  const expirationDateRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const securityCodeRef = useRef<HTMLInputElement>(null);
  const cardPasswordRefs = useRefObjects<HTMLInputElement>(2);
  const [holder, setHolder] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    cardNumber: '',
    CVC: '',
    expiry: '',
    password: '',
  });

  const validateCard = () => {
    const errors = {
      cardNumber: '',
      CVC: '',
      password: '',
      expiry: '',
    };

    const isCardNumberValid = areAllRefsMaxLength(cardRefs);
    const isPasswordValid = areAllRefsMaxLength(cardPasswordRefs);
    const isCvcValid = securityCodeRef.current?.value.length === 3;
    const isExpiryValid = isValidExpiryDate(
      expirationDateRef.current?.value || ''
    );

    if (!isCardNumberValid) {
      errors.cardNumber = '카드 번호는 모두 4자리여야 합니다.';
    }

    if (!isPasswordValid) {
      errors.password = '카드 비밀번호는 모두 1자리여야 합니다.';
    }

    if (!isCvcValid) {
      errors.CVC = 'CVC는 3자리여야 합니다.';
    }

    if (!isExpiryValid) {
      errors.expiry = '유효한 만료일을 입력해주세요. (MM/YY)';
    }

    setErrorMessages(errors);
    return isCardNumberValid && isPasswordValid && isCvcValid && isExpiryValid;
  };

  const handleInputChange = (
    index: number,
    refs: RefObject<HTMLInputElement>[],
    maxLength: number
  ) => {
    const currentInput = refs[index].current;
    if (!currentInput) return;

    const value = extractNumbers(currentInput.value);
    currentInput.value = value;

    if (value.length === maxLength) {
      if (index < refs.length - 1) {
        refs[index + 1].current?.focus();
      } else if (areAllRefsMaxLength(cardRefs) && refs === cardRefs) {
        expirationDateRef.current?.focus();
      }
    }
  };

  const handleCardNumber = (index: number) =>
    handleInputChange(index, cardRefs, 4);

  const handleCardPassword = (index: number) =>
    handleInputChange(index, cardPasswordRefs, 1);

  const checkExpiration = () => {
    if (!expirationDateRef.current) return;

    const currentValue = extractNumbers(expirationDateRef.current.value);
    if (currentValue === '') return;

    const month = currentValue.slice(0, 2);

    const date =
      month + (currentValue.length > 2 ? '/' + currentValue.slice(2, 4) : '');
    expirationDateRef.current.value = date;

    if (currentValue.length === 4) {
      nameRef.current?.focus();
    }
  };

  const handleChangeExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    if (!expirationDateRef.current || e.target.value === '') return;

    if (
      (e.nativeEvent as InputEvent).inputType === 'deleteContentBackward' &&
      e.target.value.length === 2
    ) {
      expirationDateRef.current.value = e.target.value.slice(0, 1);
      return;
    }

    checkExpiration();
  };

  const handleSecurityCode = () => {
    if (!securityCodeRef.current) return;
    securityCodeRef.current.value = extractNumbers(
      securityCodeRef.current.value
    );

    if (securityCodeRef.current.value.length === 3) {
      cardPasswordRefs[0].current?.focus();
    }
  };

  const cardNumber: CardNumber = [
    cardRefs[0].current?.value,
    cardRefs[1].current?.value,
    cardRefs[2].current?.value,
    cardRefs[3].current?.value,
  ];

  const card = {
    cardNumber,
    CVC: securityCodeRef.current?.value,
    holder,
    password1: cardPasswordRefs[0].current?.value,
    password2: cardPasswordRefs[1].current?.value,
    expiry: expirationDateRef.current?.value,
  };

  const handleSubmitCard = () => {
    if (!validateCard()) return;

    const newCard: CreditCard = { ...card, id: new Date().getTime() };
    addCard(newCard);
    navigate('/card-added', { state: newCard });
  };

  return (
    <section className="app">
      <h2 className="page-title">
        <Button onClick={() => navigate('/card-list')}>
          <PrevIcon />
        </Button>
        카드 추가
      </h2>
      <Card {...card} />
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          {cardNumberInputTypes.map((type, index) => (
            <input
              key={index}
              className="input-basic"
              type={type}
              maxLength={4}
              ref={cardRefs[index]}
              onChange={() => handleCardNumber(index)}
            />
          ))}
        </div>
        <p className="error-message">{errorMessages.cardNumber || ''}</p>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <input
            className="input-basic"
            type="text"
            placeholder="MM / YY"
            maxLength={5}
            ref={expirationDateRef}
            onChange={handleChangeExpirationDate}
          />
        </div>
        <p className="error-message">{errorMessages.expiry || ''}</p>
      </div>
      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-title">
          {holder.length} / {NAME_MAX_LENGTH}
        </span>
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={NAME_MAX_LENGTH}
          value={holder}
          ref={nameRef}
          onChange={(e) => setHolder(e.target.value)}
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <input
          className="input-basic w-25"
          type="password"
          maxLength={3}
          ref={securityCodeRef}
          onChange={handleSecurityCode}
        />
      </div>
      <p className="error-message">{errorMessages.CVC || ''}</p>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <input
          className="input-basic w-15"
          type="password"
          maxLength={1}
          ref={cardPasswordRefs[0]}
          onChange={() => handleCardPassword(0)}
        />
        <input
          className="input-basic w-15"
          type="password"
          maxLength={1}
          ref={cardPasswordRefs[1]}
          onChange={() => handleCardPassword(1)}
        />
        <input
          className="input-basic w-15"
          type="password"
          placeholder="*"
          disabled
        />
        <input
          className="input-basic w-15"
          type="password"
          placeholder="*"
          disabled
        />
      </div>
      <p className="error-message">{errorMessages.password || ''}</p>
      <div className="button-box">
        <Button onClick={handleSubmitCard}>다음</Button>
      </div>
    </section>
  );
};

export default AddCard;

const PrevIcon = () => {
  return (
    <svg
      width="10"
      height="17"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.30426 1L1.36476 8.78658L9.15134 15.7261"
        stroke="#525252"
        strokeWidth="1.5"
      />
    </svg>
  );
};

const NAME_MAX_LENGTH = 30;

const cardNumberInputTypes = ['text', 'text', 'password', 'password'];
