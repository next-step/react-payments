import React, {useContext} from "react"
import CardContext from "../context/CardContext.tsx";
import {CardType} from "../type/CardType.ts";
import {useStepper} from "../context/StepperContext.tsx";
import {AddCardCompleteProps} from "../interface/AddCardCompleteProps.ts";

const AddCardComplete: React.FC<AddCardCompleteProps> = ({id, cardCompanyName, cardNumber, userName, cardExpireDate, cardAlias}) => {
    const {modifyCard} = useContext(CardContext)
    const {setCurrentStep} = useStepper()

    const handleClick = () => {
        const card: CardType = {id, cardCompanyName, cardNumber, userName, cardExpireDate, cardAlias}
        modifyCard(card)
        setCurrentStep("CardList")
    }

    return (
        <div className="button-box">
            <span className="button-text" onClick={handleClick}>다음</span>
        </div>
    )
}

export default AddCardComplete