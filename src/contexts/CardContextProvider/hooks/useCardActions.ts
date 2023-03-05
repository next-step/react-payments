import { useContext } from 'react';

import { CardDispatchContext } from 'contexts/CardContextProvider';

import { ICard } from 'types/card';

const useCardActions = () => {
  const dispatch = useContext(CardDispatchContext);

  const deleteCard = (card: ICard) => {
    dispatch({ type: 'DELETE_CARD', payload: card });
  };

  const addOrUpdateCard = (card: ICard) => {
    dispatch({ type: 'ADD_OR_UPDATE_CARD', payload: card });
  };

  return { deleteCard, addOrUpdateCard };
};

export default useCardActions;
