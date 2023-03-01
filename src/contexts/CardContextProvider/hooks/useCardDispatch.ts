import { useContext } from 'react';

import { CardDispatchContext } from 'contexts/CardContextProvider';

const useCardDispatch = () => {
  const dispatch = useContext(CardDispatchContext);

  return dispatch;
};

export default useCardDispatch;
