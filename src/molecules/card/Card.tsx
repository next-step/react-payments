import { ExpireDate } from './expireDate/ExpireDate';
import { CardNumber } from './number/CardNumber';

export const Card = Object.assign({}, { Number: CardNumber, ExpireDate });
