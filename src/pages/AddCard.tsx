import { useState, ChangeEvent } from 'react';
import CardExpiration from '../components/CardExpiration';
import CardNumberInput from '../components/CardNumberInput';
import '../styles/index.css';

const AddCard = () => {
  const [state, setState] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  });
  const [expiration, setExpiration] = useState({
    month: '',
    year: '',
  });

  const getCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value.replace(/[^0-9]/g, ''),
    });
  };

  const getExpirationMonth = (e: ChangeEvent<HTMLInputElement>) => {
    setExpiration({
      ...expiration,
      [e.currentTarget.name]: e.currentTarget.value.replace(/[^0-9]/g, ''),
    });
  };
  return (
    <div>
      <h2>1️⃣ 카드 추가</h2>
      <div className="root">
        <div className="app">
          <h2 className="page-title"> 카드 추가 </h2>
          <div className="card-box">
            <div className="empty-card">
              <div className="card-top" />
              <div className="card-middle">
                <div className="small-card__chip" />
              </div>
              <div className="card-bottom">
                <div className="card-bottom__info">
                  <span className="card-text">NAME</span>
                  <span className="card-text">MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <CardNumberInput numbers={state} onChange={getCardNumber} />
          <CardExpiration expiration={expiration} onChange={getExpirationMonth} />

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
      </div>
    </div>
  );
};

export default AddCard;
