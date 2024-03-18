import type { SecurityCode } from '@/card';

export const isValidateSecurityCode = (securityCode: string): securityCode is SecurityCode =>
  /^[0-9]{3}$/.test(securityCode);
