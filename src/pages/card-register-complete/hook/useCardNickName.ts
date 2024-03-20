import useCardContext from '@/provider/card-info-provider/hook/useCardContext';
import { type ChangeEvent } from 'react';

const useCardNickName = () => {
  const {
    cardState: { nickname },
    handleCardState,
  } = useCardContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    handleCardState({ [name]: value });
  };

  return { nickname, handleChange };
};

export default useCardNickName;
