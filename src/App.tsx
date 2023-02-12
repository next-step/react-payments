import './styles/index.css';
import { BaseInput } from './components';

function App() {
  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">&lt; 카드 추가</h2>
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
            <BaseInput/>
            <BaseInput/>
            <BaseInput type="password"/>
            <BaseInput type="password"/>
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <BaseInput placeholder="MM"/>
            <BaseInput placeholder="YY"/>
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
          <BaseInput type="password" className="w-15"/>
          <BaseInput type="password" className="w-15"/>
        </div>
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </div>
    </div>
  );
}

export default App;
