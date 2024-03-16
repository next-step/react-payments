import '../styles/index.css'
import '../styles/input.css'
import '../styles/utils.css'
import '../styles/button.css'
import '../styles/card.css'
import '../styles/modal.css'
import NumberInput from "./NumberInput.tsx";
import Input from "./Input.tsx";
import Card from "./Card.tsx";

function App() {
    return (
        <div className="app">
            <h2 className={"page-title"}>&lt; 카드 추가</h2>
            <Card></Card>
            <div className="input-container">
                <span className="input-title">카드 번호</span>
                <div className="input-box">
                    <NumberInput className={"input-basic"} type={"text"} maxLength={4}></NumberInput>
                    <span>-</span>
                    <NumberInput className={"input-basic"} type={"text"} maxLength={4}></NumberInput>
                    <span>-</span>
                    <NumberInput className={"input-basic"} type={"password"} maxLength={4}></NumberInput>
                    <span>-</span>
                    <NumberInput className={"input-basic"} type={"password"} maxLength={4}></NumberInput>
                </div>
            </div>
            <div className="input-container">
                <span className="input-title">만료일</span>
                <div className="input-box">
                    <NumberInput className={"input-basic"} type={"text"} placeHolder={"MM"}
                                 inputRule={(value) => /^(0?\d|1[0-2])?$/.test(value)}></NumberInput>
                    <span>/</span>
                    <NumberInput className={"input-basic"} type={"text"} placeHolder={"YY"} maxLength={2}></NumberInput>
                </div>
            </div>
            <div className="input-container">
                <span className="input-title">카드 소유자 이름(선택)</span>
                <div className="input-box">
                    <Input className={"input-basic"} type={"text"} placeHolder={"카드에 표시된 이름과 동일하게 입력하세요."}
                           maxLength={30}></Input>
                </div>
            </div>
            <div className="input-container">
                <span className="input-title">보안 코드(CVC/CVV)</span>
                <div className="input-box">
                    <NumberInput className={"input-basic w-25"} type={"password"} maxLength={3}></NumberInput>
                </div>
            </div>
            <div className="input-container">
                <span className="input-title">카드 비밀번호</span>
                <div className="input-box">
                    <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1}></NumberInput>
                    <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1}></NumberInput>
                    <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1}></NumberInput>
                    <NumberInput className={"input-basic w-15"} type={"password"} maxLength={1}></NumberInput>
                </div>
            </div>
        </div>
    )
}

export default App
