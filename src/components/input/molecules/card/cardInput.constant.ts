import { CARD_NUMBER } from './number/cardNumber.constant';
import { EXPIRE_DATE } from './expireDate/expireDate.constant';
import { OWNER_NAME } from './ownerName/ownerName.constant';
import { PASSWORD } from './password/password.constant';
import { SECURITY_CODE } from './securityCode/securityCode.constant';

export const CARD_FORM = {
  CARD_NUMBER,
  EXPIRE_DATE,
  OWNER_NAME,
  PASSWORD,
  SECURITY_CODE,
};

export const CARD_FIELDS = Object.values(CARD_FORM).map(
  (field) => field.FIELDS
);
