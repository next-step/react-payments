import './styles/index.css';
import { BaseInput, CardBox } from './components';

function App() {
  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">&lt; 카드 추가</h2>
        <CardBox/>
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <div className="input-box">
            <BaseInput/>
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
