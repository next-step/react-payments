export interface CardCompanyData {
	name: string;
	code: string;
	className: string;
}

export const CARD_COMPANY_LIST: CardCompanyData[] = [
	{ name: '포코카드', code: 'poco', className: 'card-poco' },
	{ name: '준 카드', code: 'jun', className: 'card-jun' },
	{ name: '현석카드', code: 'seok', className: 'card-seok' },
	{ name: '윤호카드', code: 'yoon', className: 'card-yoon' },
	{ name: '환오카드', code: 'hwan', className: 'card-hwan' },
	{ name: '태은카드', code: 'taen', className: 'card-taen' },
	{ name: '준일카드', code: 'joonil', className: 'card-joonil' },
	{ name: '은규카드', code: 'eunkyu', className: 'card-eunkyu' },
];
export const getCardCompanyClassNameByCode = (code: string) => {
	return CARD_COMPANY_LIST.find(card => card.code === code)?.className ?? '';
};
