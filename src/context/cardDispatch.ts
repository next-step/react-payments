import { ICardData } from '../type/CardType';
import React, { Dispatch } from 'react';

interface IContext {
  state: ICardData;
  dispatch: Dispatch<ICardData>;
}

export const CardDispatch = React.createContext<IContext>({} as IContext);
