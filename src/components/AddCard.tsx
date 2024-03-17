import React, {useContext} from "react"
import {AddCardProps} from "../interface/AddCardProps.ts";
import CardContext from "../context/CardContext.tsx";

const AddCard: React.FC<AddCardProps> = ({cardName, cardNumber, name, expireDate}) => {
    const {addCard} = useContext(CardContext)
    const handleClick = () => {
        const newCard = {cardName, cardNumber, name, expireDate};
        addCard(newCard);
    }

    return (
        <div className="button-box">
            <span className="button-text" onClick={handleClick}>다음</span>
        </div>
    )
}

export default AddCard