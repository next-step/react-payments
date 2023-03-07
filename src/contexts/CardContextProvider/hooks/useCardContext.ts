import { useContext } from 'react';

import { CardDispatchContext, CardStateContext } from 'contexts/CardContextProvider';

const useCardContext = () => {
  const state = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  return { state, dispatch };
};

export default useCardContext;
