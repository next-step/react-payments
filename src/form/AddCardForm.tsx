import Card from "../components/Card.tsx";
import NumberInput from "../components/NumberInput.tsx";
import Display from "../components/Display.tsx";
import Input from "../components/Input.tsx";
import AddCard from "../components/AddCard.tsx";
import Modal from "../components/Modal.tsx";
import {Dispatch, SetStateAction, useState} from "react";
import HeaderButton from "../components/HeaderButton.tsx";
import {useStepper} from "../context/StepperContext.tsx";

function AddCardForm() {
    const {setCurrentStep} = useStepper()
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

    const handleClick = (step: string) => {
        setCurrentStep(step)
    }


    return (
        <>
            <div className="app">
                <HeaderButton className={"page-title"} tag={"h2"} value={"< 카드 추가"} onClickHandler={() => handleClick("CardList")}/>
                <Card cardCompanyName={cardName} cardNumber={cardNumber} userName={name} cardExpireDate={expireDate}
                      onClick={handleCardClick}></Card>
                <div className="input-container">
                    <span className="input-title">카드 번호</span>
                    <div className="input-box">
                        <NumberInput className={"input-basic"} type={"text"} maxLength={4}
                                     onChange={(event) => handleCardNumberChange(event.target.value, 'first')}></NumberInput>
                        <Display value={"-"}></Display>
                        <NumberInput className={"input-basic"} type={"text"} maxLength={4}
                                     onChange={(event) => handleCardNumberChange(event.target.value, 'second')}></NumberInput>
                        <Display value={"-"}></Display>
                        <NumberInput className={"input-basic"} type={"password"} maxLength={4}
                                     onChange={(event) => handleCardNumberChange(event.target.value, 'third')}></NumberInput>
                        <Display value={"-"}></Display>
                        <NumberInput className={"input-basic"} type={"password"} maxLength={4}
                                     onChange={(event) => handleCardNumberChange(event.target.value, 'fourth')}></NumberInput>
                    </div>
                </div>
                <div className="input-container">
                    <Display className={"input-title"} value={"만료일"}></Display>
                    <div className="input-box w-50">
                        <NumberInput className={"input-basic"}
                                     type={"text"}
                                     placeholder={"MM"}
                                     inputRule={(value) => /^(0?\d|1[0-2])?$/.test(value) && value !== "00"}
                                     onChange={(event) => handleExpiredDateChange(event.target.value, 'month')}></NumberInput>
                        <Display value={"/"}></Display>
                        <NumberInput className={"input-basic"}
                                     type={"text"}
                                     placeholder={"YY"}
                                     maxLength={2}
                                     onChange={(event) => handleExpiredDateChange(event.target.value, 'year')}></NumberInput>
                    </div>
                </div>
                <div className="input-container">
                    <Display className={"input-title"} value={"카드 소유자 이름(선택)"}></Display>
                    <Input className={"input-basic"}
                           type={"text"}
                           placeholder={"카드에 표시된 이름과 동일하게 입력하세요."}
                           maxLength={30}
                           onChange={(event) => setName(event.target.value)}></Input>
                </div>
                <div className="input-container">
                    <Display className={"input-title"} value={"보안 코드(CVC/CVV)"}></Display>
                    <NumberInput className={"input-basic w-25"} type={"password"} maxLength={3}></NumberInput>
                </div>
                <div className="input-container">
                    <Display className={"input-title"} value={"카드 비밀번호"}></Display>
                    <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1}></NumberInput>
                    <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1}></NumberInput>
                    <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1} disabled={true}
                                 defaultState={"*"}></NumberInput>
                    <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1} disabled={true}
                                 defaultState={"*"}></NumberInput>
                </div>
                <AddCard
                    cardCompanyName={cardName}
                    cardNumber={cardNumber}
                    userName={name}
                    expireDate={expireDate}>
                </AddCard>
            </div>
            <Modal isOpen={isModalOpen} selectCard={(value) => handleCardNameChange(value)}></Modal>
        </>
    )
}

export default AddCardForm