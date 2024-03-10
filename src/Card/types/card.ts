export interface CardInfo {
	id: number;
	bankName: string;
	cardNumber: {
		first: string;
		second: string;
		third: string;
		fourth: string;
	};
	expirationDate: {
		month: string;
		year: string;
	};
	ownerName: string;
	securityCode: string;
	password: {
		first: string;
		second: string;
	};
	cardName: string;
}
