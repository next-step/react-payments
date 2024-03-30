export type CARD_COMPANY =
	| "레냥"
	| "블냥"
	| "초냥"
	| "자냥"
	| "로냥"
	| "골냥"
	| "깜냥"
	| "신냥";

export interface CardCompanyInfo {
	companyName: CARD_COMPANY;
	color: string;
}
