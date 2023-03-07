import { useContext } from 'react';

import {
  ApiContext,
  CardNumberStoreContext,
  CardOwnersStoreContext,
  ExpireDatesStoreContext,
  PasswordsStoreContext,
  SecurityCodesStoreContext,
} from './cardStore';

export function useSelectCardNumbers() {
  return useContext(CardNumberStoreContext);
}

export function useSelectExpireDates() {
  return useContext(ExpireDatesStoreContext);
}

export function useSelectCardOwners() {
  return useContext(CardOwnersStoreContext);
}

export function useSelectPasswords() {
  return useContext(PasswordsStoreContext);
}

export function useSelectSecurityCodes() {
  return useContext(SecurityCodesStoreContext);
}

export function useCardContextApiSelector() {
  return useContext(ApiContext);
}
