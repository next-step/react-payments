import { useContext } from 'react';

import { CardStateContext } from 'contexts/CardContextProvider';

const useCardState = () => {
  const state = useContext(CardStateContext);

  return state;
};

export default useCardState;
