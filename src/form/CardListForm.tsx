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
                {cards
                    .slice() // 배열을 복사하여 원본 배열에 영향을 주지 않도록 함
                    .sort((a, b) => b.id - a.id) // id를 내림차순으로 정렬
                    .map((card) => (
                        <>
                            <div key={card.id} className="card-box">
                                <div className="small-card">
                                    <div className="card-top">
                                        <Display className={"card-text"} value={card.cardCompanyName}/>
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
                                            <Display className={"card-text"} value={card.userName}/>
                                            <Display className={"card-text"} value={card.cardExpireDate}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Display className={"card-card-nickname"} value={card.cardAlias}/>
                        </>
                    ))}
                <div className="card-box">
                    <DivButton className={"empty-card"} step={"AddCard"} value={"+"}></DivButton>
                </div>
            </div>
        </div>
    )
}

export default CardListForm