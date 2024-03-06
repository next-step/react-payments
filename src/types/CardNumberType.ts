import type CardPasswordNumberType from './CardPasswordNumberType';

type CardNumberType = {
	thirdNumber: string;
	fourthNumber: string;
} & CardPasswordNumberType ;

export default CardNumberType;
