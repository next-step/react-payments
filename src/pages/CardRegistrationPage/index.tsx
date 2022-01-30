import { useNavigate } from 'react-router-dom';
import { 카드예시 } from '../../components/Registration/카드예시';
import { convertFormDataToCard } from '../../service/card';
import { useCard } from '../../store/CardContext';
import useCardForm from './useCardForm';

const CardRegistrationPage = () => {
  const navigate = useNavigate();
  const { setCard } = useCard();

  const {
    form,
    setCardNumber,
    setExpireMonth,
    setExpireYear,
    setUserName,
    setCVC,
    setPassword,
    isFormFilled,
  } = useCardForm();

  return (
    <>
      <h2 className="page-title">
        <button
          style={{ all: 'unset', cursor: 'pointer', marginRight: '1rem' }}
          onClick={() => navigate('/')}
        >
          {'<'}
        </button>
        카드 추가
      </h2>
      <카드예시 cardForm={form} />
      <div>
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <div className="input-box">
            <input
              className="input-basic"
              type="tel"
              placeholder="1234"
              value={form.cardNumber[0]}
              onChange={({ target }) => setCardNumber(target.value, 0)}
            />
            {form.cardNumber[0].length === 4 && '-'}
            <input
              className="input-basic"
              type="tel"
              placeholder="1234"
              value={form.cardNumber[1]}
              onChange={({ target }) => setCardNumber(target.value, 1)}
            />
            {form.cardNumber[1].length === 4 && '-'}
            <input
              className="input-basic"
              type="password"
              placeholder="****"
              value={form.cardNumber[2]}
              onChange={({ target }) => setCardNumber(target.value, 2)}
            />
            {form.cardNumber[2].length === 4 && '-'}
            <input
              className="input-basic"
              type="password"
              placeholder="****"
              value={form.cardNumber[3]}
              onChange={({ target }) => setCardNumber(target.value, 3)}
            />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <input
              className="input-basic"
              type="tel"
              placeholder="MM"
              value={form.expireDate[0]}
              onChange={({ target }) => setExpireMonth(target.value)}
            />
            {form.expireDate[0].length ? '/' : ''}
            <input
              className="input-basic"
              type="tel"
              placeholder="YY"
              value={form.expireDate[1]}
              onChange={({ target }) => setExpireYear(target.value)}
            />
          </div>
        </div>
        <div className="input-container">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="input-title">카드 소유자 이름(선택)</span>
            <span className="subtext">{form.userName?.length ?? 0} / 30</span>
          </div>
          <input
            type="text"
            className="input-basic w-70"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            value={form.userName}
            onChange={({ target }) => setUserName(target.value)}
          />
        </div>
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <input
            className="input-basic w-25"
            type="password"
            value={form.CVC}
            onChange={({ target }) => setCVC(target.value)}
          />
        </div>
        <div className="input-container">
          <span className="input-title">카드 비밀번호</span>
          <input
            className="input-basic w-15"
            type="password"
            value={form.password[0]}
            onChange={({ target }) => setPassword(target.value, 0)}
          />
          <input
            className="input-basic w-15"
            type="password"
            value={form.password[1]}
            onChange={({ target }) => setPassword(target.value, 1)}
          />
          <input className="input-basic w-15" type="password" readOnly value="*" />
          <input className="input-basic w-15" type="password" readOnly value="*" />
        </div>
        <div
          className="button-box"
          onClick={() => {
            setCard(convertFormDataToCard(form));
            navigate('/registration/complete');
          }}
        >
          <button className="button-text" style={{ all: 'unset' }} disabled={!isFormFilled}>
            다음
          </button>
        </div>
      </div>
    </>
  );
};

export default CardRegistrationPage;
