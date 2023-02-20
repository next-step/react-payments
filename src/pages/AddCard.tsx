import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import useRefs from '../hooks/useRefs';

const AddCard = () => {
  const navigate = useNavigate();
  const cardRefs = useRefs<HTMLInputElement>(4);
  const expirationDateRef = useRef<HTMLInputElement>(null);
  const securityCodeRef = useRef<HTMLInputElement>(null);

  const handleCardNumber = (index: number) => {
    const currentInput = cardRefs[index].current;
    if (!currentInput) return;

    currentInput.value = currentInput.value.replace(/[^0-9]/g, '');

    if (currentInput.value.length === 4) {
      if (index < cardRefs.length - 1) {
        cardRefs[index + 1].current?.focus();
      }
    }
  };

  const checkExpiration = () => {
    if (!expirationDateRef.current) return;

    const currentValue = expirationDateRef.current.value.replace(/[^0-9]/g, '');
    if (currentValue === '') return;

    const month = currentValue.slice(0, 2);
    if (month >= '01' && month <= '12') {
      const date =
        month + (currentValue.length > 2 ? '/' + currentValue.slice(2, 4) : '');
      expirationDateRef.current.value = date;
      return;
    }

    alert('유효하지 않아요');
    expirationDateRef.current.value = '';
  };

  const handleChangeExpirationDate = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value === '') return;
    if (!expirationDateRef.current) return;

    if ((e.nativeEvent as InputEvent).inputType === 'deleteContentBackward') {
      if (e.target.value.length === 2) {
        expirationDateRef.current.value = e.target.value.slice(0, 1);
      }
      return;
    }

    checkExpiration();
  };

  const handleSecurityCode = () => {
    if (!securityCodeRef.current) return;
    securityCodeRef.current.value = securityCodeRef.current.value.replace(
      /[^0-9]/g,
      ''
    );
  };

  return (
    <section className="app">
      <h2 className="page-title">
        <button className="button-prev" onClick={() => navigate('/card-list')}>
          <PrevIcon />
        </button>
        카드 추가
      </h2>
      <div className="card-box">
        <div className="empty-card">
          <div className="card-top"></div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__info">
              <span className="card-text">NAME</span>
              <span className="card-text">MM / YY</span>
            </div>
          </div>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <input
            className="input-basic"
            type="text"
            maxLength={4}
            ref={cardRefs[0]}
            onChange={() => handleCardNumber(0)}
          />
          <input
            className="input-basic"
            type="text"
            maxLength={4}
            ref={cardRefs[1]}
            onChange={() => handleCardNumber(1)}
          />
          <input
            className="input-basic"
            type="password"
            maxLength={4}
            ref={cardRefs[2]}
            onChange={() => handleCardNumber(2)}
          />
          <input
            className="input-basic"
            type="password"
            maxLength={4}
            ref={cardRefs[3]}
            onChange={() => handleCardNumber(3)}
          />
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
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
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
        <input className="input-basic w-15" type="password" />
        <input className="input-basic w-15" type="password" />
        <input className="input-basic w-15" type="password" />
        <input className="input-basic w-15" type="password" />
      </div>
      <div className="button-box">
        <span className="button-text">다음</span>
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
