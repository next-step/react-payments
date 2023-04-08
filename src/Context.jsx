import { createContext, useState, useContext } from 'react';
import { DEFAULT_CARD_INFO } from './Constant';

export const PaymentContext = createContext({
  state: { cardInfo: null, cardList: null },
  actions: {
    setCardInfo: () => {},
    setCardList: () => {}
  }
});

export const PaymentProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState(DEFAULT_CARD_INFO); //작성 중인 카드 정보 인스턴스라고 생각하기
  const [cardList, setCardList] = useState([]);

  const value = {
    state: { cardInfo, cardList },
    actions: { setCardInfo, setCardList }
  };
  return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>;
};

export const usePaymentContext = () => {
  const { state } = useContext(PaymentContext);
  if (!state) throw new Error('Cannot find PaymentContextProvider');
  return state;
};

export const usePaymentAction = () => {
  const { actions } = useContext(PaymentContext);
  if (!actions) throw new Error('Cannot find PaymentContextProvider');
  return actions;
};
