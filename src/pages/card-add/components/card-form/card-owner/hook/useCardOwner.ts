import { CardInfoContext } from '@/provider/card-info-provider/CardInfoProvider';
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

  return { ownerName, handleChange: handleOwnerName };
};

export default useCardOwner;
