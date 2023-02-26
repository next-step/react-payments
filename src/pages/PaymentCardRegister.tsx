import React, { useState } from 'react';
import PaymentCardRegisterPrev from '../components/CardRegisterPrev';
const PaymentCardRegister = () => {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  return <PaymentCardRegisterPrev setIsComplete={setIsComplete} />;
};

export default PaymentCardRegister;
