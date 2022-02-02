import '../css/index.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Center, Title, Button, BasicCard } from '../components/index.js';
import { CardInfoContext } from '../App';

const emptyCardNickName = '클린카드';

const CreditCardRegister = () => {
    const navigate = useNavigate();
    const { state, dispatch, setCardList, cardList } = useContext(CardInfoContext);
    const { cardNumber, expireDate, name, nickName } = state;

    const addCardList = () => {
        setCardList([
            { ...state, nickName: !state.nickName ? emptyCardNickName : state.nickName },
            ...cardList,
        ]);
    };

    const updateCardList = () => {
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
    };

    const goCreditCardList = () => {
        if (cardList.find((item) => item.cardNumber === cardNumber)) updateCardList();
        else addCardList();
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
                        value={nickName}
                        onChange={(text) => dispatch({ nickName: text })}
                    />
                    <Button title={'다음'} onClick={goCreditCardList} marginTop={50} />
                </div>
            </div>
        </>
    );
};

export default CreditCardRegister;
