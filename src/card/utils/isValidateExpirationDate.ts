import type { ExpirationDate } from '@/card/types';

export const isValidateExpirationDate = (expirationDate: string): expirationDate is ExpirationDate =>
  /^(0[1-9]|1[0-2]) [0-9]{2}$/.test(expirationDate);
