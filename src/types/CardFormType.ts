export type CardPasswordNumberType = {
	firstNumber: string;
	secondNumber: string;
};

export type CardNumberType = {
	thirdNumber: string;
	fourthNumber: string;
} & CardPasswordNumberType;

export type ExpirationDateType = {
	month: string;
	year: string;
};
