import React from 'react';
import { useCardFieldContext } from '../CardFieldContext/CardFieldContext';
import CardNumberField from './CardNumberField/CardNumberField';
import CardOwnerNameField from './CardOwnerNameField/CardOwnerNameField';
import CardCVCNumberField from './CardCVCNumberField/CardCVCNumberField';

const CardFields = () => {
  const data = useCardFieldContext();
  return (
    <form>
      <CardNumberField cardNumber={data?.cardNumber || ''} />
      <CardOwnerNameField ownerName={data?.ownerName || ''} />
      <CardCVCNumberField cvc={data?.cvc || ''} />
    </form>
  );
};

export default CardFields;
