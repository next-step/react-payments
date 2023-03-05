import { createContext, useState, useContext } from 'react';

export const PaymentContext = createContext({
  state: { cardInfo: null },
  actions: {
    setCardInfo: () => {}
  }
});

const defaultCardInfo = {
  company: '',
  number: '',
  owner: '',
  expiry: '',
  nickname: '',
  cvc: '',
  password1: '',
  password2: '',
  backgroundColor: '#e5e5e5'
};

export const PaymentProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState(defaultCardInfo); //작성 중인 카드 정보 인스턴스라고 생각하기
  const value = {
    state: { cardInfo },
    actions: { setCardInfo }
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
