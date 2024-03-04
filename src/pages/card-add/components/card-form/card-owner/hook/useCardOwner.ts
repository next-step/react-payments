import { CardInfoContext } from '@/provider/CardInfoProvider';
import { ChangeEvent, useContext } from 'react';

const useCardOwner = () => {
  const {
    cardState: { ownerName },
    handleCardState,
  } = useContext(CardInfoContext);
  const handleOwnerName = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleCardState({ [name]: value });
  };

  return { state: ownerName, handleChange: handleOwnerName };
};

export default useCardOwner;
