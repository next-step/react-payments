import React, { useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreditCardAdd, CreditCardList, CreditCardRegister } from './pages';
import { CardInfoContext } from './context/cardInfoContext';

const initForm = {
    cardNumber: {
        first: '',
        second: '',
        third: '',
        forth: '',
    },
    expireDate: { yy: '', mm: '' },
    name: '',
    cvc: '',
    password: {
        first: '',
        second: '',
    },
    nickName: '',
};

const reducer = (state, action) => {
    return {
        ...state,
        ...action,
    };
};

const App = () => {
    const [cardList, setCardList] = useState([]);
    const [cardInfo, setCardInfo] = useReducer(reducer, initForm);

    const pages = [
        {
            path: '/',
            component: <CreditCardAdd />,
        },
        {
            path: '/creditCardList',
            component: <CreditCardList initForm={initForm} />,
        },
        {
            path: '/creditCardRegister',
            component: <CreditCardRegister />,
        },
    ];

    return (
        <CardInfoContext.Provider value={{ cardInfo, setCardInfo, cardList, setCardList }}>
            <Routes>
                {pages.map((page) => (
                    <Route key={page.path} path={page.path} element={page.component} />
                ))}
            </Routes>
        </CardInfoContext.Provider>
    );
};

export default App;
