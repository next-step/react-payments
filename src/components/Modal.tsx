import React from "react"
import {ModalProps} from "../interface/ModalProps.ts";

const Modal: React.FC<ModalProps> = ({isOpen, selectCard}) => {
    const cardSelect = (cardName: string) => {
        selectCard(cardName)
    }

    return (
        <div className="modal-dimmed" style={{ display: isOpen ? "flex" : "none" }}>
            <div className="modal">
                <div className="flex-center">
                    <div className="modal-item-container" onClick={() => cardSelect("포코 카드")}>
                        <div className="modal-item-dot"></div>
                        <span className="modal-item-name">포코 카드</span>
                    </div>
                    <div className="modal-item-container" onClick={() => cardSelect("준 카드")}>
                        <div className="modal-item-dot"></div>
                        <span className="modal-item-name">준 카드</span>
                    </div>
                    <div className="modal-item-container" onClick={() => cardSelect("현석 카드")}>
                        <div className="modal-item-dot"></div>
                        <span className="modal-item-name">현석 카드</span>
                    </div>
                    <div className="modal-item-container" onClick={() => cardSelect("윤호 카드")}>
                        <div className="modal-item-dot"></div>
                        <span className="modal-item-name">윤호 카드</span>
                    </div>
                </div>
                <div className="flex-center">
                    <div className="modal-item-container" onClick={() => cardSelect("환오 카드")}>
                        <div className="modal-item-dot"></div>
                        <span className="modal-item-name">환오 카드</span>
                    </div>
                    <div className="modal-item-container" onClick={() => cardSelect("태은 카드")}>
                        <div className="modal-item-dot"></div>
                        <span className="modal-item-name">태은 카드</span>
                    </div>
                    <div className="modal-item-container" onClick={() => cardSelect("준일 카드")}>
                        <div className="modal-item-dot"></div>
                        <span className="modal-item-name">준일 카드</span>
                    </div>
                    <div className="modal-item-container" onClick={() => cardSelect("은규 카드")}>
                        <div className="modal-item-dot"></div>
                        <span className="modal-item-name">은규 카드</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal