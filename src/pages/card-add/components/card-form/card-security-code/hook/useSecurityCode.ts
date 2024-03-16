import {validNumber} from '@/domain/validate';
import useCardContext from '@/provider/card-info-provider/hook/useCardContext';
import {type ChangeEvent} from 'react';

const useSecurityCode = ({nextFocus}: {nextFocus: any}) => {
  const {
    cardState: {securityCode},
    handleCardState,
  } = useCardContext();
  const handleScurityCode = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    if (validNumber(value)) {
      handleCardState({[name]: value});
      if (value.length === 3) {
        nextFocus.current.focus();
      }
    }
  };

  return {securityCode, handleScurityCode};
};

export default useSecurityCode;
