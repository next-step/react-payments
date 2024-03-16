import useCardContext from '@/provider/card-info-provider/hook/useCardContext';
import { ChangeEvent } from 'react';

const useCardOwner = () => {
  const {
    cardState: { ownerName },
    handleCardState,
  } = useCardContext();
  const handleOwnerName = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleCardState({ [name]: value });
  };

  return { ownerName, handleChange: handleOwnerName };
};

export default useCardOwner;
