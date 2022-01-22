import '../css/index.css';
import { useNavigate } from 'react-router-dom';
import { Input, InputContainer, Center, Title, Button, BasicCard } from '../components/index.js';

const CreditCardRegister = ({ state, dispatch }) => {
    const navigate = useNavigate();
    const { cardNumber, expireDate, name } = state;

    const clickNext = () => {
        navigate('/creditCardList');
    };

    return (
        <>
            <h2>4️⃣ 카드 추가 완료</h2>
            <div className="root">
                <div className="app flex-column-center">
                    <Center>
                        <Title title={'카드등록이 완료되었습니다.'} />
                    </Center>
                    <BasicCard
                        cardName={'작업예정'}
                        name={name}
                        expireDate={expireDate}
                        cardNumber={cardNumber}
                    />
                    <Input
                        shape={'underline'}
                        size={75}
                        placeholder={'카드의 별칭을 입력해주세요.'}
                        onChange={(text) => dispatch({ nickName: text })}
                    />
                    <Button title={'다음'} onClick={clickNext} size={50} />
                </div>
            </div>
        </>
    );
};

export default CreditCardRegister;
