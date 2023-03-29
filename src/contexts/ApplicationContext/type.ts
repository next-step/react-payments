import { Service } from '@/hooks';
import type { TCardStoreKeys } from '@/contexts/CardContext';
import type {
  TCardCompany,
  TCardNickname,
  TCardNumber,
  TCardOwner,
  TCardPassword,
  TExpireMonth,
  TExpireYear,
  TSecurityCode,
} from '@/types';

type TCardState<T> = { value: T };
export interface ICard extends Record<TCardStoreKeys, TCardState<unknown>[]> {
  cardCompanies: [TCardState<TCardCompany>];
  cardNicknames: [TCardState<TCardNickname>];
  cardNumbers: [TCardState<TCardNumber>, TCardState<TCardNumber>, TCardState<TCardNumber>, TCardState<TCardNumber>];
  expireDates: [TCardState<TExpireMonth>, TCardState<TExpireYear>];
  cardOwners: [TCardState<TCardOwner>];
  securityCodes: [TCardState<TSecurityCode>];
  passwords: [TCardState<TCardPassword>, TCardState<TCardPassword>];
}
export type TCardList = { [cardId: string]: ICard };

export type TCardListService = Service<TCardList | null>;

export type TApplicationContextValue = {
  onCardConfirmClick: (card: ICard) => any;
  service: TCardListService;
};
