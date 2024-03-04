import { CardInfo } from "../types/card";

export const CARD_NUMBER_LENGTH = 4;
export const CARD_EXPIRATION_DATE_LENGTH = 5; // MM/YY
export const CARD_SECURITY_CODE_LENGTH = 3;
export const CARD_PASSWORD_LENGTH = 1;
export const CARD_OWNER_NAME_LENGTH = 30;

export const TEMP_CARD_LENGTH = 2;

export const NEW_CARD: CardInfo = {
	id: TEMP_CARD_LENGTH + 1,
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
} as const;
