import React from 'react';
import { useCardFieldContext } from '../CardFieldContext/CardFieldContext';
import { CardNumberField } from './CardNumberField';
import { CardOwnerNameField } from './CardOwnerNameField';
import { CardCVCNumberField } from './CardCVCNumberField';
import { CardPasswordField } from './CardPasswordField';
import { CardExpirationDateField } from './CardExpirationDateField';

const CardFields = () => {
  const data = useCardFieldContext();
  return (
    <form>
      <CardNumberField cardNumber={data?.cardNumber || ''} />
      <CardExpirationDateField
        expirationMonth={data?.expirationMonth || ''}
        expirationYear={data?.expirationYear || ''}
      />
      <CardOwnerNameField ownerName={data?.ownerName || ''} />
      <CardCVCNumberField cvc={data?.cvc || ''} />
      <CardPasswordField cardPassword={data?.cardPassword || ''} />
    </form>
  );
};

export default CardFields;
