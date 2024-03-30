import { theme } from "@/common/utils";
import { CardCompanyInfo } from "../types/cardCompany";

export const CARD_COMPANIES: CardCompanyInfo[] = [
	{ companyName: "레냥", color: theme.colors.red500 },
	{ companyName: "블냥", color: theme.colors.blue500 },
	{ companyName: "초냥", color: theme.colors.green500 },
	{ companyName: "자냥", color: theme.colors.purple500 },
	{ companyName: "로냥", color: theme.colors.orange500 },
	{ companyName: "골냥", color: theme.colors.yellow500 },
	{ companyName: "깜냥", color: theme.colors.pink500 },
	{ companyName: "신냥", color: theme.colors.cyan500 }
] as const;
