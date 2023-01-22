import { PropsWithChildren } from "react";

export default function Modal({ children }: PropsWithChildren) {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        {children}
        <div className="flex-center">
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
        </div>
        <div className="flex-center">
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
        </div>
      </div>
    </div>
  );
}
