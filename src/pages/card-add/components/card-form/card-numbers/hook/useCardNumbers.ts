import { validCardNumber } from '@/domain/validate';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import { ChangeEvent, useContext, useRef } from 'react';

const useNumbers = () => {
  const {
    cardState: { cardNumbers },
    handleCardState,
  } = useContext(CardInfoContext);

  const handleCardNumbers = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const { name, value } = e.target;
    const result = validCardNumber(value.replace(/\D/g, ''));
    const displayValue = result ? value : cardNumbers?.[name];

    if (inputRefs.current[idx]) {
      inputRefs.current[idx].value = displayValue || '';
    }

    handleCardState({ cardNumbers: { ...cardNumbers, [name]: value } });
  };

  const inputRefs = useRef<Array<HTMLInputElement>>([]);
  return { state: cardNumbers, handleChange: handleCardNumbers, refs: inputRefs };
};

export default useNumbers;
