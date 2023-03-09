export default function CardCompanyModal({ handleModalClick }) {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        <div className="flex-center">
          <div className="modal-item-container" onClick={handleModalClick}>
            <div className="modal-item-dot dot1"></div>
            <span className="modal-item-name">사성 카드</span>
          </div>
          <div className="modal-item-container" onClick={handleModalClick}>
            <div className="modal-item-dot dot2"></div>
            <span className="modal-item-name">형대 카드</span>
          </div>
          <div className="modal-item-container" onClick={handleModalClick}>
            <div className="modal-item-dot dot3"></div>
            <span className="modal-item-name">룻데 카드</span>
          </div>
          <div className="modal-item-container" onClick={handleModalClick}>
            <div className="modal-item-dot dot4"></div>
            <span className="modal-item-name">버씨 카드</span>
          </div>
        </div>
        <div className="flex-center">
          <div className="modal-item-container" onClick={handleModalClick}>
            <div className="modal-item-dot dot5"></div>
            <span className="modal-item-name">궁민 카드</span>
          </div>
          <div className="modal-item-container" onClick={handleModalClick}>
            <div className="modal-item-dot dot6"></div>
            <span className="modal-item-name">심한 카드</span>
          </div>
          <div className="modal-item-container" onClick={handleModalClick}>
            <div className="modal-item-dot dot7"></div>
            <span className="modal-item-name">누리 카드</span>
          </div>
          <div className="modal-item-container" onClick={handleModalClick}>
            <div className="modal-item-dot dot8"></div>
            <span className="modal-item-name">하니 카드</span>
          </div>
        </div>
      </div>
    </div>
  );
}
