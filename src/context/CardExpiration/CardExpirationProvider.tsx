import { ChangeEvent, createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { CARD } from '@/constants/card';
import { validateCardExpiration } from '@/domain/card/validation';
import { CardExpiration } from '@/types/card';

type InitValue = {
  cardExpiration: CardExpiration;
  만료일이모두입력된: boolean;
  handleChangeExpiration: (e: ChangeEvent<HTMLInputElement>) => void;
};

const initValue: InitValue = {
  cardExpiration: { month: '', year: '' },
  만료일이모두입력된: false,
  handleChangeExpiration: () => null,
};

export const CardExpirationContext = createContext(initValue);

export default function CardExpirationProvider({ children }: PropsWithChildren) {
  const [cardExpiration, setCardExpiration] = useState({ month: '', year: '' });

  const cardExpirationsLength = Object.values(cardExpiration).map((expiration) => expiration.length);
  const 만료일이모두입력된 = cardExpirationsLength.every((length) => length === CARD.EXPIRATION.LENGTH);

  const handleChangeExpiration = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      validateCardExpiration({ name, value, cardExpiration });

      setCardExpiration((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [cardExpiration],
  );

  const contextValue = useMemo(
    () => ({ cardExpiration, 만료일이모두입력된, handleChangeExpiration }),
    [cardExpiration, handleChangeExpiration, 만료일이모두입력된],
  );

  return <CardExpirationContext.Provider value={contextValue}>{children}</CardExpirationContext.Provider>;
}
