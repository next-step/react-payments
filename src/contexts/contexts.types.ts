import { 라우터_프로퍼티 } from '@/constants';
//
import type { CardState, SecureCardState } from 'literal';

export type CardAction =
  | { type: 'ADD_CARD'; card: CardState }
  | { type: 'EDIT_CARD'; card: SecureCardState }
  | { type: 'DEL_CARD'; card: SecureCardState };

export type RouterKeys = (typeof 라우터_프로퍼티)[keyof typeof 라우터_프로퍼티];

export type RouterState = {
  prevRoute: string[];
  currentRoute: RouterKeys;
  params?: Record<string, any>;
};
export type RouterAction =
  | { type: 'PUSH'; route: RouterKeys; params?: Record<string, any> }
  | { type: 'BACK' };
