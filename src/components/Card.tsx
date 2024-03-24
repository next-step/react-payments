import React from "react"
import Display from "./Display.tsx"
import {CardProps} from "../interface/CardProps.ts"

const Card: React.FC<CardProps> = ({cardName, cardNumber, name, cardExpireDate, onClick}) => {

    const formattedExpireDate = () => {
        if (cardExpireDate) {
            const {month, year} = cardExpireDate
            return month && year ? `${month} / ${year}` : `${month}${year}`
        }
        return ''
    }
    const formattedCardNumber = () => {
        if (cardNumber) {
            let {first, second, third, fourth} = cardNumber
            if (first.length > 0) {
                first = first + "-"
            }
            if (second.length > 0) {
                second = second + "-"
            }
            const thirdSecret = third.length === 4 ? "****-" : "*".repeat(third.length)
            const fourthSecret = fourth.length === 4 ? "****" : "*".repeat(fourth.length)
            return `${first}${second}${thirdSecret}${fourthSecret}`
        }
        return ''
    }

    return (
        <div className={"card-box"} onClick={onClick}>
            <div className="empty-card">
                <div className={"card-top"}>
                    <Display className={"card-text"} value={cardName}></Display>
                </div>
                <div className={"card-middle"}>
                    <div className={"small-card__chip"}></div>
                </div>
                <div className={"card-bottom"}>
                    <div className="card-bottom__number">
                        <Display className={"card-text"} value={formattedCardNumber()}></Display>
                    </div>
                    <div className={"card-bottom__info"}>
                        <Display className={"card-text"} value={name} defaultValue={"NAME"}></Display>
                        <Display className={"card-text"} value={formattedExpireDate()} defaultValue={"MM / YY"}></Display>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
