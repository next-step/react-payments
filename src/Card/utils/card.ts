import { theme } from "@/common/utils";
import { CARD_COMPANIES } from "../constants/cardCompany";
import { CardInfo } from "../types/card";

export const makeNewCard = (currentCardLength: number) =>
	({
		id: currentCardLength + 1,
		companyName: "",
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

export const getColorWithCompanyName = (companyName: string): string => {
	const companyInfo = CARD_COMPANIES.find(
		(company) => company.companyName === companyName
	);
	return companyInfo ? companyInfo.color : theme.colors.cyan500;
};
