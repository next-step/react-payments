import React, { useContext, useReducer } from 'react';
import { CardDispatchType, CardInfoType } from '../type/card';
import { reducer } from '../hook/cardReducer';
import { initCardInfo } from '../data/init';

const CardStateContext = React.createContext<CardInfoType | null>(null);
const CardDispatchContext = React.createContext<CardDispatchType | null>(null);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initCardInfo);

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        {children}
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
};

export const useCardState = () => {
  const state = useContext(CardStateContext);
  if (!state) throw new Error('Cannot find CardStateProvider');
  return state;
};

export const useCardDispatch = () => {
  const dispatch = useContext(CardDispatchContext);
  if (!dispatch) throw new Error('Cannot find CardDispatchProvider');
  return dispatch;
};
