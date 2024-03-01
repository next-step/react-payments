import { ExpireDate } from './expireDate/ExpireDate';
import { CardNumber } from './number/CardNumber';
import { OwnerName } from './ownerName/OwnerName';
import { SecurityCode } from './securityCode/SecurityCode';

export const Card = Object.assign(
  {},
  { Number: CardNumber, ExpireDate, OwnerName, SecurityCode }
);
