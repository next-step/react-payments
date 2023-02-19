import React, { useState } from 'react';
import { CardDispatch } from '../context/cardDispatch';
import PaymentCardRegisterPrev from '../components/CardRegisterPrev';
import PaymentCardRegisterNext from '../components/CardRegisterNext';
const PaymentCardRegister = () => {
  const [state, dispatch] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
    expire: '',
    name: '',
    cvc: '',
    ps1: '',
    ps2: '',
  });
  const [isComplete, setIsComplete] = useState<boolean>(false);

  return (
    <CardDispatch.Provider value={{ state, dispatch }}>
      {!isComplete ? (
        <PaymentCardRegisterPrev setIsComplete={setIsComplete} />
      ) : (
        <PaymentCardRegisterNext />
      )}
    </CardDispatch.Provider>
  );
};

export default PaymentCardRegister;
