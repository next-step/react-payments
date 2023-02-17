import React from 'react';
import { useCardFieldContext } from '../CardFieldContext/CardFieldContext';
import CardNumberField from './CardNumberField/CardNumberField';
import CardOwnerNameField from './CardOwnerNameField/CardOwnerNameField';

const CardFields = () => {
  const data = useCardFieldContext();
  return (
    <form>
      <CardNumberField cardNumber={data?.cardNumber || ''} />
      <CardOwnerNameField ownerName={data?.ownerName || ''} />
    </form>
  );
};

export default CardFields;
