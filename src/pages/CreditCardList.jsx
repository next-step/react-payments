import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasicCard, Title, EmptyCard, Button, Center } from '../components/index.js';
import { CardInfoContext } from '../App';

const CreditCardList = ({ initForm }) => {
    const navigate = useNavigate();
    const { dispatch, cardList, setCardList } = useContext(CardInfoContext);

    const goCreditCardAdd = () => {
        dispatch(initForm);
        navigate('/');
    };

    const goCreditRegister = (state) => {
        dispatch(state);
        navigate('/creditCardRegister');
    };

    const deleteCard = (cardNumber) => {
        setCardList(cardList.filter((item) => item.cardNumber !== cardNumber));
    };
    return (
        <>
            <h2>5️⃣ 카드 목록</h2>
            <div className="root">
                <div className="app flex-column-center">
                    <Title title={'보유카드'} />
                    {cardList.map((card, index) => (
                        <>
                            <BasicCard
                                key={`${card.cardNumber}_${index}`}
                                cardNumber={card.cardNumber}
                                name={card.name}
                                expireDate={card.expireDate}
                                nickName={card.nickName}
                                onClick={() => goCreditRegister(card)}
                            />
                            <Center>
                                <Button
                                    onClick={() => deleteCard(card.cardNumber)}
                                    title={'삭제'}
                                />
                            </Center>
                        </>
                    ))}
                    <EmptyCard onClick={goCreditCardAdd} />
                </div>
            </div>
        </>
    );
};

export default CreditCardList;
