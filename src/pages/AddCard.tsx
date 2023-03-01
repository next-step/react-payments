import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Card from '../components/Card';
import useRefObjects from '../hooks/useRefObjects';
import { extractNumbers } from '../utils';

const cardNumberInputTypes = ['text', 'text', 'password', 'password'];

const AddCard = () => {
  const navigate = useNavigate();
  const cardRefs = useRefObjects<HTMLInputElement>(4);
  const expirationDateRef = useRef<HTMLInputElement>(null);
  const securityCodeRef = useRef<HTMLInputElement>(null);
  const cardPasswordRefs = useRefObjects<HTMLInputElement>(2);
  const [name, setName] = useState('');

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
    if (month < JANUARY || month > DECEMBER) {
      alert(MONTH_VALIDITY_MESSAGE);
      expirationDateRef.current.value = '';
      return;
    }

    const date =
      month + (currentValue.length > 2 ? '/' + currentValue.slice(2, 4) : '');
    expirationDateRef.current.value = date;
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
  };

  const CardData = {
    num1: cardRefs[0].current?.value,
    num2: cardRefs[1].current?.value,
    num3: cardRefs[2].current?.value,
    num4: cardRefs[3].current?.value,
    holder: name,
    expiry: expirationDateRef.current?.value,
  };

  return (
    <section className="app">
      <h2 className="page-title">
        <Button onClick={() => navigate('/card-list')}>
          <PrevIcon />
        </Button>
        카드 추가
      </h2>
      <Card data={CardData} />
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
      </div>
      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-title">
          {name.length} / {NAME_MAX_LENGTH}
        </span>
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={NAME_MAX_LENGTH}
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <div className="button-box">
        <Button onClick={() => navigate('/card-added')}>다음</Button>
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

const JANUARY = '01';
const DECEMBER = '12';
const MONTH_VALIDITY_MESSAGE = '유효하지 않아요';
const NAME_MAX_LENGTH = 30;
