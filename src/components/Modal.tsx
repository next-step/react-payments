import React from "react"
import {ModalProps} from "../interface/ModalProps.ts";
import {CardListType} from "../enums/CardListType.ts";
import {CardModalType} from "../type/CardModalType.ts";

const Modal: React.FC<ModalProps> = ({isOpen, selectCard}) => {
    const cardSelect = (cardName: string) => {
        selectCard(cardName)
    }
    const cardModalArray = (): CardModalType[] => {
        let idCounter = 1
        return Object.values(CardListType).map((cardType) => ({
            id: idCounter++,
            cardListType: cardType
        }))
    }

    const cardModalTypes = cardModalArray();

    return (
        <div className="modal-dimmed" style={{display: isOpen ? "flex" : "none"}}>
            <div className="modal">
                {cardModalTypes.map((card) => (
                    <div key={card.id} className="modal-item-container" onClick={() => cardSelect(card.cardListType)}>
                        <div className="modal-item-dot"></div>
                        <span className="modal-item-name">{card.cardListType}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Modal