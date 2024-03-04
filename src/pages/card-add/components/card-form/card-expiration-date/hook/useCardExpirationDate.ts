import { validExpirationDate } from '@/domain/validate';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import { ChangeEvent, useContext, useRef } from 'react';

const useCardExpirationDate = () => {
  const { cardState, handleCardState } = useContext(CardInfoContext);
  const inputRefs = useRef<Array<HTMLInputElement>>([]);

  const handleExpirationDate = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const { value, name } = e.target;

    if (!value) {
      handleCardState({ [name]: value });
      inputRefs.current[idx].value = '';
      return;
    }

    const result = validExpirationDate(value);
    const displayValue = result ? value : cardState[name];
    handleCardState({ [name]: displayValue });
    inputRefs.current[idx].value = displayValue;
  };
  return { handleChange: handleExpirationDate, refs: inputRefs };
};

export default useCardExpirationDate;
