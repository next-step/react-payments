import { validSecurityCode } from '@/domain/validate';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import { ChangeEvent, useContext, useRef } from 'react';

const useSecurityCode = () => {
  const {
    cardState: { securityCode },
    handleCardState,
  } = useContext(CardInfoContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleScurityCode = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const result = validSecurityCode(value.replace(/\D/g, ''));
    const displayValue = result ? value : securityCode;
    if (inputRef.current) {
      inputRef.current.value = displayValue || '';
    }
    handleCardState({ [name]: displayValue || '' });
  };

  return { handleScurityCode, inputRef };
};

export default useSecurityCode;
