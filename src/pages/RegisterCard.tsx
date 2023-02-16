import { BaseInput, CardBox } from './../components';
import { useEffect, useRef } from 'react';
import { useCard, useForm } from '../hooks';
import { Formatter } from '../domain';

const { onlyNumber } = Formatter;

export default function RegisterCard() {
  const { cardState, setCardState } = useCard({
    cardCompany: '',
    cardNumber: '',
    userName: '',
    expiredDate: '',
    type: 'small',
  });

  const [cardNumber, setCardNumber] = useForm({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const [expired, setExpired] = useForm({
    month: '',
    year: '',
  });

  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);

  const expiredMonth = useRef(null);
  const expiredYear = useRef(null);

  useEffect(() => {
    const newCardNumber = Object.values(cardNumber).map((item) => item.value);
    const newExpiredDate = Object.values(expired).map((item) => item.value);

    setCardState({
      ...cardState,
      expiredDate: newExpiredDate.join(''),
      cardNumber: newCardNumber,
    });
  }, [cardNumber, expired]);

  return (
    <div className="app">
      <h2 className="page-title">&lt; 카드 추가</h2>
      <CardBox {...cardState} />
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <BaseInput
            {...cardNumber.first}
            onChange={setCardNumber}
            maxLength={4}
            nextFocus={secondInput.current}
            filter={onlyNumber}
          />
          -
          <BaseInput
            {...cardNumber.second}
            onChange={setCardNumber}
            ref={secondInput}
            maxLength={4}
            nextFocus={thirdInput.current}
            filter={onlyNumber}
          />
          -
          <BaseInput
            {...cardNumber.third}
            onChange={setCardNumber}
            ref={thirdInput}
            type="password"
            maxLength={4}
            nextFocus={fourthInput.current}
            filter={onlyNumber}
          />
          -
          <BaseInput
            {...cardNumber.fourth}
            onChange={setCardNumber}
            ref={fourthInput}
            type="password"
            maxLength={4}
            nextFocus={expiredMonth.current}
            filter={onlyNumber}
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <BaseInput
            ref={expiredMonth}
            placeholder="MM"
            nextFocus={expiredYear.current}
            maxLength={2}
            {...expired.month}
            onChange={setExpired}
            filter={onlyNumber}
          />
          /
          <BaseInput
            ref={expiredYear}
            placeholder="YY"
            maxLength={2}
            {...expired.year}
            onChange={setExpired}
            filter={onlyNumber}
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <BaseInput placeholder="카드에 표시된 이름과 동일하게 입력하세요."/>
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <BaseInput type="password" className="w-25"/>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <div className="flex-start">
          <BaseInput type="password" className="w-15"/>
          <BaseInput type="password" className="w-15"/>
          <p className="flex-center w-15">•</p>
          <p className="flex-center w-15">•</p>
        </div>
      </div>
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </div>
  );
}