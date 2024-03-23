import {useContext} from "react";
import CardContext from "../context/CardContext.tsx";
import Display from "../components/Display.tsx";
import DivButton from "../components/DivButton.tsx";

function CardListForm() {
    const {cards} = useContext(CardContext)

    const formattedCardNumber = (first: string, second: string) => {
        return `${first}-${second}-****-****`
    }

    return (
        <div className="root">
            <div className="app flex-column-center">
                <div className="flex-center">
                    <h2 className="page-title mb-10">보유 카드</h2>
                </div>
                {cards.map((card, index) => (
                    <>
                        <div key={index} className="card-box">
                            <div className="small-card">
                                <div className="card-top">
                                    <Display className={"card-text"} value={card.cardName}/>
                                </div>
                                <div className="card-middle">
                                    <div className="small-card__chip"></div>
                                </div>
                                <div className="card-bottom">
                                    <div className="card-bottom__number">
                                        <Display className={"card-text"}
                                                 value={formattedCardNumber(card.cardNumber.first, card.cardNumber.second)}/>
                                    </div>
                                    <div className="card-bottom__info">
                                        <Display className={"card-text"} value={card.name}/>
                                        <Display className={"card-text"} value={card.cardExpireDate}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Display className={"card-card-nickname"} value={card.cardAlias}/>
                    </>
                ))}
                <div className="card-box">
                    <DivButton className={"empty-card"} step={"/"} value={"+"}></DivButton>
                </div>
            </div>
        </div>
    )
}

export default CardListForm