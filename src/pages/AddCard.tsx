import { ChangeEvent, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Card } from '../components';
import { CardNumber } from '../components/Card/Card';
import { CreditCard, PaymentsContext } from '../context/PaymentsContext';
import useRefObjects from '../hooks/useRefObjects';
import {
  areAllRefsMaxLength,
  extractNumbers,
  handleRefInputMaxLength,
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
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

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

  const handleCardNumber = (index: number) =>
    handleRefInputMaxLength(
      index,
      cardRefs,
      index < cardRefs.length - 1 ? cardRefs[index + 1] : expirationDateRef
    );

  const handleCardPassword = (index: number) =>
    handleRefInputMaxLength(
      index,
      cardPasswordRefs,
      index < cardPasswordRefs.length - 1
        ? cardPasswordRefs[index + 1]
        : undefined
    );

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
        <p className="error-message">{errorMessages.cardNumber}</p>
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
        <p className="error-message">{errorMessages.expiry}</p>
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
        <div className="cvc">
          <input
            className="input-basic w-25"
            type="password"
            maxLength={3}
            ref={securityCodeRef}
            onChange={handleSecurityCode}
          />
          <button
            className="cvc-info"
            onClick={() => setIsTooltipOpen(true)}
            onBlur={() => setIsTooltipOpen(false)}
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="13.5"
                cy="13.5"
                r="13"
                fill="white"
                stroke="#BABABA"
              />
              <path
                d="M12.5547 16.8203C12.5547 15.9544 12.6621 15.2643 12.877 14.75C13.0918 14.2357 13.515 13.6725 14.1465 13.0605C14.7845 12.4421 15.1882 12.0026 15.3574 11.7422C15.6178 11.3451 15.748 10.9154 15.748 10.4531C15.748 9.84115 15.5951 9.37565 15.2891 9.05664C14.9896 8.73112 14.5469 8.56836 13.9609 8.56836C13.401 8.56836 12.9486 8.72786 12.6035 9.04688C12.265 9.35938 12.0957 9.78581 12.0957 10.3262H9.72266C9.73568 9.17383 10.1263 8.26237 10.8945 7.5918C11.6693 6.92122 12.6914 6.58594 13.9609 6.58594C15.2695 6.58594 16.2884 6.91797 17.0176 7.58203C17.7533 8.24609 18.1211 9.17383 18.1211 10.3652C18.1211 11.4264 17.6263 12.4714 16.6367 13.5L15.4355 14.6816C15.0059 15.1699 14.7845 15.8828 14.7715 16.8203H12.5547ZM12.3887 19.8574C12.3887 19.4733 12.5091 19.1641 12.75 18.9297C12.9909 18.6888 13.3164 18.5684 13.7266 18.5684C14.1432 18.5684 14.472 18.6921 14.7129 18.9395C14.9538 19.1803 15.0742 19.4863 15.0742 19.8574C15.0742 20.2155 14.957 20.515 14.7227 20.7559C14.4883 20.9967 14.1562 21.1172 13.7266 21.1172C13.2969 21.1172 12.9648 20.9967 12.7305 20.7559C12.5026 20.515 12.3887 20.2155 12.3887 19.8574Z"
                fill="#969696"
              />
            </svg>
          </button>
        </div>
        {isTooltipOpen && (
          <div className="cvc-tooltip">
            보안코드는 카드 뒷면의 마지막 3자리 숫자입니다.
          </div>
        )}
      </div>
      <p className="error-message">{errorMessages.CVC}</p>
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
      <p className="error-message">{errorMessages.password}</p>
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
