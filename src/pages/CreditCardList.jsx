import { useNavigate } from 'react-router-dom';
import { BasicCard, Title, EmptyCard } from '../components/index.js';

const CreditCardList = ({ state, dispatch, initForm }) => {
    const navigate = useNavigate();
    const { cardNumber, expireDate, name, nickName } = state;

    const goCreditCardAdd = () => {
        dispatch(initForm);
        navigate('/');
    };

    return (
        <>
            <h2>5️⃣ 카드 목록</h2>
            <div className="root">
                <div className="app flex-column-center">
                    <Title title={'보유카드'} />
                    <BasicCard
                        title={'작업예정'}
                        cardNumber={cardNumber}
                        name={name}
                        expireDate={expireDate}
                        nickName={nickName}
                    />
                    <EmptyCard onClick={goCreditCardAdd} />
                </div>
            </div>
        </>
    );
};

export default CreditCardList;
