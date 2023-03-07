import { useContext } from 'react';

import { CardDispatchContext, ACTION_TYPE } from 'contexts/CardContextProvider';

import { ICard, ICardWithoutId } from 'types/card';

const useCardActions = () => {
  const dispatch = useContext(CardDispatchContext);

  const addCard = (card: ICardWithoutId) => {
    dispatch({ type: ACTION_TYPE.ADD_CARD, payload: card });
  };

  const updateCard = (card: ICard) => {
    dispatch({ type: ACTION_TYPE.UPDATE_CARD, payload: card });
  };

  const deleteCard = (id: number) => {
    dispatch({ type: ACTION_TYPE.DELETE_CARD, payload: id });
  };

  return { addCard, updateCard, deleteCard };
};

export default useCardActions;
