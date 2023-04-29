import { ICard } from '../../domain/payments/types';

export type THookCardDetailHandlers = {
  card: ICard;
  newAlias: string;
  setAlias: React.Dispatch<React.SetStateAction<string>>;
  aliasRef: React.RefObject<HTMLInputElement>;
};
