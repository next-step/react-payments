import '../styles/index.css'
import '../styles/input.css'
import '../styles/utils.css'
import '../styles/button.css'
import '../styles/card.css'
import '../styles/modal.css'
import NumberInput from "./NumberInput.tsx"
import Input from "./Input.tsx"
import Card from "./Card.tsx"
import {Dispatch, SetStateAction, useState} from "react"
import Modal from "./Modal.tsx"
import {CardProvider} from "../context/CardContext.tsx";
import AddCard from "./AddCard.tsx";

function App() {
    const [cardName, setCardName] = useState('')
    const [name, setName] = useState('')
    const [expireDate, setExpireDate] = useState({month: '', year: ''})
    const [cardNumber, setCardNumber] = useState({first: '', second: '', third: '', fourth: ''})
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCardClick = () => {
        setIsModalOpen(true)
    }

    const handleCardNameChange = (value: string) => {
        setCardName(value)
        setIsModalOpen(false)
    }
    const handleInputChange = (value: string, field: string, setState: Dispatch<SetStateAction<any>>) => {
        setState(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

    const handleExpiredDateChange = (value: string, field: string) => {
        handleInputChange(value, field, setExpireDate)
    }

    const handleCardNumberChange = (value: string, field: string) => {
        handleInputChange(value, field, setCardNumber)
    }

    return (
        <CardProvider>
            <>
                <div className="app">
                    <h2 className={"page-title"}>&lt; 카드 추가</h2>
                    <Card cardName={cardName} cardNumber={cardNumber} name={name} cardExpireDate={expireDate}
                          onClick={handleCardClick}></Card>
                    <div className="input-container">
                        <span className="input-title">카드 번호</span>
                        <div className="input-box">
                            <NumberInput className={"input-basic"} type={"text"} maxLength={4}
                                         inputChange={(value) => handleCardNumberChange(value, 'first')}></NumberInput>
                            <span>-</span>
                            <NumberInput className={"input-basic"} type={"text"} maxLength={4}
                                         inputChange={(value) => handleCardNumberChange(value, 'second')}></NumberInput>
                            <span>-</span>
                            <NumberInput className={"input-basic"} type={"password"} maxLength={4}
                                         inputChange={(value) => handleCardNumberChange(value, 'third')}></NumberInput>
                            <span>-</span>
                            <NumberInput className={"input-basic"} type={"password"} maxLength={4}
                                         inputChange={(value) => handleCardNumberChange(value, 'fourth')}></NumberInput>
                        </div>
                    </div>
                    <div className="input-container">
                        <span className="input-title">만료일</span>
                        <div className="input-box w-50">
                            <NumberInput className={"input-basic"}
                                         type={"text"}
                                         placeHolder={"MM"}
                                         inputRule={(value) => /^(0?\d|1[0-2])?$/.test(value) && value !== "00"}
                                         inputChange={(value) => handleExpiredDateChange(value, 'month')}></NumberInput>
                            <span>/</span>
                            <NumberInput className={"input-basic"}
                                         type={"text"}
                                         placeHolder={"YY"}
                                         maxLength={2}
                                         inputChange={(value) => handleExpiredDateChange(value, 'year')}></NumberInput>
                        </div>
                    </div>
                    <div className="input-container">
                        <span className="input-title">카드 소유자 이름(선택)</span>
                        <Input className={"input-basic"}
                               type={"text"}
                               placeHolder={"카드에 표시된 이름과 동일하게 입력하세요."}
                               maxLength={30}
                               inputChange={setName}></Input>
                    </div>
                    <div className="input-container">
                        <span className="input-title">보안 코드(CVC/CVV)</span>
                        <NumberInput className={"input-basic w-25"} type={"password"} maxLength={3}></NumberInput>
                    </div>
                    <div className="input-container">
                        <span className="input-title">카드 비밀번호</span>
                        <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1}></NumberInput>
                        <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1}></NumberInput>
                        <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1} disabled={true}
                                     defaultState={"*"}></NumberInput>
                        <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1} disabled={true}
                                     defaultState={"*"}></NumberInput>
                    </div>
                    <AddCard cardName={cardName} name={name} cardNumber={cardNumber} expireDate={expireDate}></AddCard>
                </div>
                <Modal isOpen={isModalOpen} selectCard={(value) => handleCardNameChange(value)}></Modal>
            </>
        </CardProvider>
    )
}

export default App
