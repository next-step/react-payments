import React from "react"
import Display from "./Display.tsx"
import {CardProps} from "../interface/CardProps.ts"

const Card: React.FC<CardProps> = ({cardCompanyName, cardNumber, userName, cardExpireDate, onClick}) => {

    const formattedExpireDate = () => {
        if (cardExpireDate) {
            const {month, year} = cardExpireDate
            return month && year ? `${month} / ${year}` : `${month}${year}`
        }
        return ''
    }

    const formattedCardNumber = () => {
        if (cardNumber) {
            const maskString = (input: string) => input.replace(/./g, '*')
            let {first, second, third, fourth} = cardNumber
            return [first, second, maskString(third), maskString(fourth)]
                .filter((value) => value.length >= 1)
                .join('-')
        }
        return ''
    }

    return (
        <div className={"card-box"} onClick={onClick}>
            <div className="empty-card">
                <div className={"card-top"}>
                    <Display className={"card-text"} value={cardCompanyName}></Display>
                </div>
                <div className={"card-middle"}>
                    <div className={"small-card__chip"}></div>
                </div>
                <div className={"card-bottom"}>
                    <div className="card-bottom__number">
                        <Display className={"card-text"} value={formattedCardNumber()}></Display>
                    </div>
                    <div className={"card-bottom__info"}>
                        <Display className={"card-text"} value={userName} defaultValue={"NAME"}></Display>
                        <Display className={"card-text"} value={formattedExpireDate()} defaultValue={"MM / YY"}></Display>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
