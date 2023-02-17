import { Card, CardNumberContainer } from 'components';

import { useCardNumber } from './hooks';
import { CardCompany } from 'types/card';

function AddingCard() {
  const { cardNumber, updateCardNumber } = useCardNumber();

  return (
    <div className="app">
      <h2 className="page-title">{`<`} 카드 추가</h2>
      <span className="input-title">카드사 선택</span>
      <Card cardNumber={cardNumber} name="YOUNG" company={CardCompany.Hana} expiredDate={{ month: '08', year: '11' }} />
      <CardNumberContainer cardNumber={cardNumber} updateCardNumber={updateCardNumber} />
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <input className="input-basic" type="text" placeholder="MM" />
          <input className="input-basic" type="text" placeholder="YY" />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <input type="text" className="input-basic" placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <input className="input-basic w-25" type="password" />
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
    </div>
  );
}

export default AddingCard;
