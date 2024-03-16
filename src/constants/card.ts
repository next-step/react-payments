import { CardInfo } from 'src/machines/addCardMachine.ts';

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

export const CARD_COMPANY_MAP = CARD_COMPANY_LIST.reduce(
	(acc, card) => {
		acc[card.code] = card;
		return acc;
	},
	{} as Record<string, CardCompanyData>,
);

export const getCardCompanyCodeByCardNumber = ({
	cardNumberFirstSegment,
	cardNumberSecondSegment,
}: Pick<CardInfo, 'cardNumberFirstSegment' | 'cardNumberSecondSegment'>) => {
	if (cardNumberFirstSegment.length < 4 || cardNumberSecondSegment.length < 4) {
		return '';
	}

	const firstEightDigitsNumber = Number(cardNumberFirstSegment + cardNumberSecondSegment);

	return CARD_COMPANY_LIST[firstEightDigitsNumber % CARD_COMPANY_LIST.length]?.code || '';
};
