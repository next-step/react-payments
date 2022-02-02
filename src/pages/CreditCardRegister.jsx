import '../css/index.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Center, Title, Button, BasicCard } from '../components/index.js';
import { CardInfoContext } from '../App';

const emptyCardNickName = '클린카드';

const CreditCardRegister = () => {
    const navigate = useNavigate();
    const { state, dispatch, setCardList, cardList } = useContext(CardInfoContext);
    const { cardNumber, expireDate, name } = state;

    const clickNext = () => {
        if (cardList.find((item) => item.cardNumber === cardNumber)) {
            setCardList(
                cardList.map((item) => {
                    if (item.cardNumber === cardNumber)
                        return {
                            ...state,
                            nickName: !state.nickName ? emptyCardNickName : state.nickName,
                        };

                    return item;
                })
            );
        } else {
            setCardList([
                ...cardList,
                { ...state, nickName: !state.nickName ? emptyCardNickName : state.nickName },
            ]);
        }

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
                    <BasicCard name={name} expireDate={expireDate} cardNumber={cardNumber} />
                    <Input
                        shape={'underline'}
                        size={75}
                        placeholder={'카드의 별칭을 입력해주세요.'}
                        onChange={(text) => dispatch({ nickName: text })}
                    />
                    <Button title={'다음'} onClick={clickNext} marginTop={50} />
                </div>
            </div>
        </>
    );
};

export default CreditCardRegister;
