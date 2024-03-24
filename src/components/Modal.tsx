import React from "react"
import {ModalProps} from "../interface/ModalProps.ts";
import {CardType} from "../enums/CardType.ts";

const Modal: React.FC<ModalProps> = ({isOpen, selectCard}) => {
    const cardNames = Object.keys(CardType);
    const chunkSize = 4;
    const chunkedCardNames: string[][] = [];
    for (let i = 0; i < cardNames.length; i += chunkSize) {
        chunkedCardNames.push(cardNames.slice(i, i + chunkSize));
    }
    const cardSelect = (cardName: string) => {
        selectCard(cardName)
    }

    return (
        <div className="modal-dimmed" style={{display: isOpen ? "flex" : "none"}}>
            <div className="modal">
                {chunkedCardNames.map((chunk, index) => (
                    <div key={index} className="flex-center">
                        {chunk.map((key) => (
                            <div className="modal-item-container"
                                 onClick={() => cardSelect(CardType[key as keyof typeof CardType])}>
                                <div className="modal-item-dot"></div>
                                <span
                                    className="modal-item-name">{CardType[key as keyof typeof CardType]}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Modal