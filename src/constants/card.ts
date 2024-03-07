import { CardInfoWithId } from 'src/state/addCardMachine.ts';

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

export const getCardCompanyNameByCode = (code: string) => {
	return CARD_COMPANY_LIST.find(card => card.code === code)?.name ?? '';
};

export const MOCK_CARD_INFO_LIST: CardInfoWithId[] = [
	{
		id: '1',
		cardNumberFirstSegment: '1234',
		cardNumberSecondSegment: '5678',
		cardNumberThirdSegment: '1234',
		cardNumberFourthSegment: '5678',
		cardOwnerName: '김포코',
		cardExpirationDate: '12/24',
		cardPasswordFirstDigit: '1',
		cardPasswordSecondDigit: '2',
		cardSecurityCode: '123',
		cardNickname: '포코카드',
		cardCompanyCode: 'poco',
	},
	{
		id: '2',
		cardNumberFirstSegment: '1234',
		cardNumberSecondSegment: '5678',
		cardNumberThirdSegment: '1234',
		cardNumberFourthSegment: '5678',
		cardOwnerName: '김준',
		cardExpirationDate: '12/24',
		cardPasswordFirstDigit: '1',
		cardPasswordSecondDigit: '2',
		cardSecurityCode: '123',
		cardNickname: '준 카드',
		cardCompanyCode: 'jun',
	},
	{
		id: '3',
		cardNumberFirstSegment: '1234',
		cardNumberSecondSegment: '5678',
		cardNumberThirdSegment: '1234',
		cardNumberFourthSegment: '5678',
		cardOwnerName: '김현석',
		cardExpirationDate: '12/24',
		cardPasswordFirstDigit: '1',
		cardPasswordSecondDigit: '2',
		cardSecurityCode: '123',
		cardNickname: '현석카드',
		cardCompanyCode: 'seok',
	},
	{
		id: '4',
		cardNumberFirstSegment: '1234',
		cardNumberSecondSegment: '5678',
		cardNumberThirdSegment: '1234',
		cardNumberFourthSegment: '5678',
		cardOwnerName: '김윤호',
		cardExpirationDate: '12/24',
		cardPasswordFirstDigit: '1',
		cardPasswordSecondDigit: '2',
		cardSecurityCode: '123',
		cardNickname: '윤호카드',
		cardCompanyCode: 'yoon',
	},
	{
		id: '5',
		cardNumberFirstSegment: '1234',
		cardNumberSecondSegment: '5678',
		cardNumberThirdSegment: '1234',
		cardNumberFourthSegment: '5678',
		cardOwnerName: '김환오',
		cardExpirationDate: '12/24',
		cardPasswordFirstDigit: '1',
		cardPasswordSecondDigit: '2',
		cardSecurityCode: '123',
		cardNickname: '환오카드',
		cardCompanyCode: 'hwan',
	},
];
