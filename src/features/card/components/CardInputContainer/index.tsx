import { CardInput } from '@/features/card/components/CardInput';
import { useState } from 'react';

export const CardInputContainer = () => {
  const [input, setInput] = useState({
    cardName: '',
    companyName: '',
    cardNumber: '',
    expirationDate: {
      MM: '',
      YY: '',
    },
    ownerName: '',
    securityCode: '',
    password: '',
  });

  const onChangeNumber = () => {};

  const onChangeExpirationDate = () => {};
  const onChangeOwner = () => {};
  const onChangeSecurityCode = () => {};
  const onChangePassword = () => {};

  return (
    <>
      <CardInput.Display
        cardName={input.cardName}
        companyName={input.companyName}
        cardNumber={input.cardNumber}
        expirationDate={input.expirationDate}
      />
      <CardInput.Number cardNumber={input.cardNumber} onChange={onChangeNumber} />
      <CardInput.ExpirationDate
        expirationDate={input.expirationDate}
        onChange={onChangeExpirationDate}
      />
      <CardInput.Owner ownerName={input.ownerName} onChange={onChangeOwner} />
      <CardInput.SecurityCode securityCode={input.securityCode} onChange={onChangeSecurityCode} />
      <CardInput.Password password={input.password} onChange={onChangePassword} />
    </>
  );
};
