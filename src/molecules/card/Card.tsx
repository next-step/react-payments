import { ExpireDate } from './expireDate/ExpireDate';
import { CardNumber } from './number/CardNumber';
import { OwnerName } from './ownerName/OwnerName';

export const Card = Object.assign(
  {},
  { Number: CardNumber, ExpireDate, OwnerName }
);
