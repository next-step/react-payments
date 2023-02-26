import { ChangeEvent, createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { CARD } from '@/constants/card';
import { validateCardPassword } from '@/domain/card/validation';
import { CardPassword } from '@/types/card';

type InitValue = {
  cardPassword: CardPassword;
  카드비밀번호가모두입력된: boolean;
  resetCardPassword: () => void;
  handleChangeCardPassword: (e: ChangeEvent<HTMLInputElement>) => void;
};

const initValue: InitValue = {
  cardPassword: {
    num1: '',
    num2: '',
  },
  카드비밀번호가모두입력된: false,
  resetCardPassword: () => null,
  handleChangeCardPassword: () => null,
};

export const CardPasswordContext = createContext(initValue);

export default function CardPasswordProvider({ children }: PropsWithChildren) {
  const [cardPassword, setCardPassword] = useState({
    num1: '',
    num2: '',
  });
  const cardPasswordsLength = Object.values(cardPassword).map((password) => password.length);
  const 카드비밀번호가모두입력된 = cardPasswordsLength.every((length) => length === CARD.PASSWORD.LENGTH);

  const resetCardPassword = useCallback(() => {
    setCardPassword({
      num1: '',
      num2: '',
    });
  }, []);

  const handleChangeCardPassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      validateCardPassword({ name, value, cardPassword });

      setCardPassword((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [cardPassword],
  );

  const contextValue = useMemo(
    () => ({ cardPassword, 카드비밀번호가모두입력된, resetCardPassword, handleChangeCardPassword }),
    [cardPassword, 카드비밀번호가모두입력된, resetCardPassword, handleChangeCardPassword],
  );

  return <CardPasswordContext.Provider value={contextValue}>{children}</CardPasswordContext.Provider>;
}
