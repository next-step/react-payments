const CompanySelectionModal = () => {
  return (
    <div>
      <div className="app">
        <h2 className="page-title">{"<"} 카드 추가</h2>
        <div className="card-box">
          <div className="small-card">
            <div className="card-top">
              <span className="card-text">클린카드</span>
            </div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text">1111 - 2222 - oooo - oooo</span>
              </div>
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
            <input className="input-basic" type="text" value="1111" />
            <input className="input-basic" type="text" value="2222" />
            <input className="input-basic" type="password" value="1111" />
            <input className="input-basic" type="password" value="1111" />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <input className="input-basic" type="text" placeholder="MM" />
            <input className="input-basic" type="text" placeholder="YY" />
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
          <span class="input-title">보안코드(CVC/CVV)</span>
          <input class="input-basic w-25" type="password" />
        </div>
        <div class="input-container">
          <span class="input-title">카드 비밀번호</span>
          <input class="input-basic w-15" type="password" />
          <input class="input-basic w-15" type="password" />
          <input class="input-basic w-15" type="password" />
          <input class="input-basic w-15" type="password" />
        </div>
        <div class="button-box">
          <span class="button-text">다음</span>
        </div>
      </div>
      <div class="modal-dimmed">
        <div class="modal">
          <div class="flex-center">
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
          </div>
          <div class="flex-center">
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
            <div class="modal-item-container">
              <div class="modal-item-dot"></div>
              <span class="modal-item-name">클린 카드</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySelectionModal;
