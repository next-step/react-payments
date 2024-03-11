import { ExpireDate } from './expireDate/ExpireDate';
import { CardNumber } from './number/CardNumber';
import { OwnerName } from './ownerName/OwnerName';
import { SecurityCode } from './securityCode/SecurityCode';
import { Password } from './password/Password';

export const Card = {
  Number: CardNumber,
  ExpireDate,
  OwnerName,
  SecurityCode,
  Password,
};
