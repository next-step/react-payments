import { BaseInput, CardBox } from './../components';
import { useEffect, useMemo, useRef } from 'react';
import { useCard, useForm } from '../hooks';
import { Filter } from '../domain';

const { onlyNumber } = Filter;

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

  const expiredMonthInput = useRef(null);
  const expiredYearInput = useRef(null);

  const cvcInput = useRef(null);
  const passwordInput = useRef();
  const passwordInput2 = useRef();

  const newCardNumber = useMemo(() => Object.values(cardNumber).map((item) => item.value), [cardNumber]);
  const newExpiredDate = useMemo(() => Object.values(expired).map((item) => item.value).join(''), [expired]);

  useEffect(() => {
    setCardState({
      ...cardState,
      expiredDate: newExpiredDate,
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
            type="passwordInput"
            maxLength={4}
            nextFocus={expiredMonthInput.current}
            filter={onlyNumber}
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <BaseInput
            ref={expiredMonthInput}
            placeholder="MM"
            nextFocus={expiredYearInput.current}
            maxLength={2}
            {...expired.month}
            onChange={setExpired}
            filter={onlyNumber}
          />
          /
          <BaseInput
            ref={expiredYearInput}
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
        <BaseInput
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          nextFocus={cvcInput.current}
          maxLength={30}
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <BaseInput
          type="password"
          className="w-25"
          maxLength={3}
          filter={onlyNumber}
          ref={cvcInput}
          nextFocus={passwordInput.current}
        />
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <div className="flex-start">
          <BaseInput
            type="password"
            filter={onlyNumber}
            maxLength={1}
            className="w-15"
            ref={passwordInput}
            nextFocus={passwordInput2.current}

          />
          <BaseInput
            ref={passwordInput2}
            type="password"
            filter={onlyNumber}
            maxLength={1}
            className="w-15"
          />
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