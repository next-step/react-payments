import { theme } from "@/common/utils";
import { CARD_COMPANY, CardCompanyInfo } from "../types/cardCompany";

export const CARD_COLOR_MAP: Record<CARD_COMPANY, string> = {
	레냥: theme.colors.red[500],
	블냥: theme.colors.blue[500],
	초냥: theme.colors.green[500],
	자냥: theme.colors.purple[500],
	로냥: theme.colors.orange[500],
	골냥: theme.colors.yellow[500],
	깜냥: theme.colors.pink[500],
	신냥: theme.colors.cyan[500]
} as const;

export const CARD_COMPANIES: CardCompanyInfo[] = [
	{ companyName: "레냥", color: theme.colors.red[500] },
	{ companyName: "블냥", color: theme.colors.blue[500] },
	{ companyName: "초냥", color: theme.colors.green[500] },
	{ companyName: "자냥", color: theme.colors.purple[500] },
	{ companyName: "로냥", color: theme.colors.orange[500] },
	{ companyName: "골냥", color: theme.colors.yellow[500] },
	{ companyName: "깜냥", color: theme.colors.pink[500] },
	{ companyName: "신냥", color: theme.colors.cyan[500] }
] as const;
