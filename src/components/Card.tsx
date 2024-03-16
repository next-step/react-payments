import React, {useState} from "react";
import Display from "./Display.tsx";

const Card: React.FC = () => {
    const [cardNumber, setCardNumber] = useState<string>("")
    const [cardName, setCardName] = useState<string>("")
    const [cardExpireDate, setCardExpireDate] = useState<string>("")

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
                        <Display className={"card-text"} value={cardNumber}></Display>
                    </div>
                    <div className={"card-bottom__info"}>
                        <Display className={"card-text"} value={cardName} defaultValue={"NAME"}></Display>
                        <Display className={"card-text"} value={cardExpireDate} defaultValue={"MM / YY"}></Display>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
