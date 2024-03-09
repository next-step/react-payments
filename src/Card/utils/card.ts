import { CardInfo } from "../types/card";

export const makeNewCard = (currentCardLength: number) =>
	({
		id: currentCardLength + 1,
		bankName: "",
		cardNumber: {
			first: "",
			second: "",
			third: "",
			fourth: ""
		},
		expirationDate: {
			month: "",
			year: ""
		},
		ownerName: "",
		securityCode: "",
		password: {
			first: "",
			second: ""
		},
		cardName: ""
	} as CardInfo);
