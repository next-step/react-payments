import React, {useContext} from "react"
import {AddCardProps} from "../interface/AddCardProps.ts";
import CardContext from "../context/CardContext.tsx";
import {CardType} from "../type/CardType.ts";
import {useStepper} from "../context/StepperContext.tsx";
import Display from "./Display.tsx";
import Button from "./Button.tsx";

const AddCard: React.FC<AddCardProps> = ({cardCompanyName, cardNumber, userName, expireDate}) => {
    const {maxCardId, addCard} = useContext(CardContext)
    const {setCurrentStep} = useStepper()

    const handleClick = () => {
        const {month, year} = expireDate
        const cardExpireDate = `${month} / ${year}`
        const newCard: CardType = {id: maxCardId + 1 , cardCompanyName, cardNumber, userName, cardExpireDate}
        addCard(newCard)
        setCurrentStep("AddCardComplete")
    }

    return (
        <Button onClick={handleClick}>
            <Display value={"다음"}/>
        </Button>
    )
}

export default AddCard