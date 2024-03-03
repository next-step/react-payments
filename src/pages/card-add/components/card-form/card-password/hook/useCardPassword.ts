import { validCardPassword } from '@/domain/validate';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import { ChangeEvent, useContext, useRef } from 'react';

const useCardPassword = () => {
  const inputRefs = useRef<Array<HTMLInputElement>>([]);

  const { cardState, handleCardState } = useContext(CardInfoContext);
  const handleCardPassword = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const { name, value } = e.target;

    const result = validCardPassword(value.replace(/\D/g, ''));
    const displayValue = result ? value : cardState[name];

    if (inputRefs.current[idx]) {
      inputRefs.current[idx].value = displayValue;
    }
    handleCardState({ [name]: displayValue });
  };
  return { handleChange: handleCardPassword, refs: inputRefs };
};

export default useCardPassword;
