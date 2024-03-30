import {useContext, useState} from "react";
import CardContext from "../context/CardContext.tsx";
import Display from "../components/Display.tsx";
import Input from "../components/Input.tsx";
import AddCardComplete from "../components/AddCardComplete.tsx";

function AddCardCompleteForm() {
    const {cards} = useContext(CardContext)
    const [cardAlias, setCardAlias] = useState('')
    const card = cards?.[cards.length-1]

    const formattedCardNumber = () => {
        return `${card.cardNumber.first}-${card.cardNumber.second}-****-****`
    }

    return (
        <>
            <div className="root">
                <div className="app flex-column-center">
                    <div className="flex-center">
                        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
                    </div>
                    <div className="card-box">
                        <div className="big-card">
                            <div className="card-top">
                                <Display className={"card-text__big"} value={card.cardCompanyName}/>
                            </div>
                            <div className="card-middle">
                                <div className="big-card__chip"></div>
                            </div>
                            <div className="card-bottom">
                                <div className="card-bottom__number">
                                    <Display className={"card-text__big"} value={formattedCardNumber()}/>
                                </div>
                                <div className="card-bottom__info">
                                    <Display className={"card-text__big"} value={card?.userName}/>
                                    <Display className={"card-text__big"} value={card.cardExpireDate}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-container flex-center w-100">
                        <Input
                            className={"input-underline w-75"}
                            type={"text"}
                            placeholder={"카드의 별칭을 입력해주세요."}
                            onChange={(event) => setCardAlias(event.target.value)}>
                        </Input>
                    </div>
                    <AddCardComplete
                        id={card.id}
                        cardCompanyName={card.cardCompanyName}
                        cardNumber={card.cardNumber}
                        userName={card.userName}
                        cardExpireDate={card.cardExpireDate}
                        cardAlias={cardAlias}
                    >
                    </AddCardComplete>
                </div>
            </div>
        </>
    )
}

export default AddCardCompleteForm