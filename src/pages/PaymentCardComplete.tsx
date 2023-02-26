import React, { useEffect } from 'react';
import CardRegisterComplete from '../components/CardRegisterComplete';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentCardComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location?.state?.isComplete) {
      navigate('/');
    }
  }, [location]);

  return <CardRegisterComplete />;
};

export default PaymentCardComplete;
