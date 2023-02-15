import { BaseInput, CardBox } from './../components';
import { useInput } from './../hooks';
import { useEffect } from 'react';
import useCard from '../hooks/useCard';

export default function RegisterCard() {
  const { cardState, setCardState } = useCard('');

  const cardNumber = useInput('');
  const cardNumber2 = useInput('');
  const cardNumber3 = useInput('');
  const cardNumber4 = useInput('');

  useEffect(() => {
    setCardState([
      cardNumber.value,
      cardNumber2.value,
      cardNumber3.value,
      cardNumber4.value,
    ]);
  }, [
    cardNumber,
    cardNumber2,
    cardNumber3,
    cardNumber4,
  ]);

  return (
    <div className="app">
      <h2 className="page-title">&lt; 카드 추가</h2>
      <CardBox cardNumber={cardState}/>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <BaseInput {...cardNumber} maxLength={4}/>
          -
          <BaseInput {...cardNumber2} maxLength={4}/>
          -
          <BaseInput {...cardNumber3} type="password" maxLength={4}/>
          -
          <BaseInput {...cardNumber4} type="password" maxLength={4}/>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <BaseInput placeholder="MM / YY"/>
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
        <BaseInput type="password" className="w-15"/>
        <BaseInput type="password" className="w-15"/>
        <BaseInput type="password" value="0" disabled className="w-15"/>
        <BaseInput type="password" value="0" disabled className="w-15"/>
      </div>
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </div>
  );
}