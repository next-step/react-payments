import React from "react";
import Display from "./Display.tsx";
import {CardProps} from "../interface/CardProps.ts";

const Card: React.FC<CardProps> = ({cardNumber, name, cardExpireDate}) => {

    const formattedExpireDate = () => {
        if (cardExpireDate) {
            const {month, year} = cardExpireDate;
            return month && year ? `${month} / ${year}` : `${month}${year}`
        }
        return ''
    }
    const formattedCardNumber = () => {
        if (cardNumber) {
            let {first, second, third, fourth} = cardNumber;
            if (first.length === 4) {
                first = first + "-"
            }
            if (second.length === 4) {
                second = second + "-"
            }
            let thirdSecret = third.length === 4 ? "****-" : "*".repeat(third.length);
            let fourthSecret = fourth.length === 4 ? "****" : "*".repeat(fourth.length);
            return `${first} ${second} ${thirdSecret} ${fourthSecret}`
        }
        return ''
    }

    return (
        <div className={"card-box"}>
            <div className="empty-card">
                <div className={"card-top"}>

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
