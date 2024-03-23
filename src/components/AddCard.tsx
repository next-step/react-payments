import React, {useContext} from "react"
import {AddCardProps} from "../interface/AddCardProps.ts";
import CardContext from "../context/CardContext.tsx";
import {CardType} from "../type/CardType.ts";
import {useStepper} from "../context/StepperContext.tsx";

const AddCard: React.FC<AddCardProps> = ({cardName, cardNumber, name, expireDate}) => {
    const {addCard} = useContext(CardContext)
    const {setCurrentStep} = useStepper()

    const handleClick = () => {
        const {month, year} = expireDate
        const cardExpireDate = `${month} / ${year}`
        const newCard: CardType = {cardName, cardNumber, name, cardExpireDate}
        addCard(newCard)
        setCurrentStep("AddCardComplete")
    }

    return (
        <div className="button-box">
            <span className="button-text" onClick={handleClick}>다음</span>
        </div>
    )
}

export default AddCard