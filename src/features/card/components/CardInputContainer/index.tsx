import { useState } from 'react';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { CardInput } from '@/features/card/components/CardInput';
import { CARD_INPUT } from '@/features/card/constants/cardInputValue';

export const CardInputContainer = () => {
  const [input, setInput] = useState(CARD_INPUT);

  const onChangeInput = <T extends keyof CardInputInterface>(
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[T],
  ) => {
    setInput((prev) => ({ ...prev, [prop]: nextVal }));
  };

  return (
    <>
      <CardInput.Display
        cardName={input.cardName}
        companyName={input.companyName}
        cardNumber={input.cardNumber}
        expirationDate={input.expirationDate}
      />
      <CardInput.Number cardNumber={input.cardNumber} onChange={onChangeInput} />
      <CardInput.ExpirationDate expirationDate={input.expirationDate} onChange={onChangeInput} />
      <CardInput.Owner ownerName={input.ownerName} onChange={onChangeInput} />
      <CardInput.SecurityCode securityCode={input.securityCode} onChange={onChangeInput} />
      <CardInput.Password password={input.password} onChange={onChangeInput} />
    </>
  );
};
