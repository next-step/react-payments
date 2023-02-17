import React from 'react';
import { useCardFieldContext } from '../CardFieldContext/CardFieldContext';
import CardNumberField from './CardNumberField/CardNumberField';

const CardFields = () => {
  const data = useCardFieldContext();
  return (
    <form>
      <CardNumberField cardNumber={data?.cardNumber || ''} />
    </form>
  );
};

export default CardFields;
