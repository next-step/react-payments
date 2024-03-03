import { CardInfoContext } from '@/provider/CardInfoProvider';
import { ChangeEvent, useContext, useRef } from 'react';

const MIN_MONTH = 1;
const MAX_MONTH = 12;
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
    const result =
      MIN_MONTH <= Number(value) && MAX_MONTH >= Number(value) ? value : cardState[name];
    handleCardState({ [name]: result });
    const inputValue = result;
    inputRefs.current[idx].value = inputValue;
  };
  return { handleChange: handleExpirationDate, refs: inputRefs };
};

export default useCardExpirationDate;
