import { CardInfoWithId } from 'src/machines/addCardMachine.ts';
import { addCardMachineSetup, initialCardInfo } from 'src/machines/addCardMachine.ts';

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

export const mockCardListMachine = addCardMachineSetup.createMachine({
	id: 'addCard',
	initial: 'CardList',
	context: {
		cardInfo: {
			...initialCardInfo,
		},
		cardList: MOCK_CARD_INFO_LIST,
		selectedCard: { ...initialCardInfo, id: '' },
	},
	states: {
		CardList: {
			on: {
				GO_TO_FORM: {
					target: 'AddCardForm',
				},
				SELECT_CARD: {
					target: 'AddCardFinish',
					actions: [{ type: 'selectCard' }],
				},
				DELETE_CARD: {
					actions: [{ type: 'deleteCard' }],
				},
			},
		},
		AddCardForm: {
			initial: 'selectCardCompany',
			states: {
				selectCardCompany: {
					on: {
						TOGGLE: {
							target: 'enterCardInfo',
						},
					},
				},
				enterCardInfo: {
					on: {
						TOGGLE: {
							target: 'selectCardCompany',
						},
					},
				},
			},
			on: {
				ADD_CARD: {
					target: 'AddCardFinish',
					actions: [{ type: 'addCard' }],
				},
				CHANGE_FIELD: {
					target: 'AddCardForm.enterCardInfo',
					actions: [{ type: 'changeFieldAddCardForm' }],
				},
				BACK: {
					target: 'CardList',
					actions: [{ type: 'resetAddCardForm' }],
				},
			},
		},
		AddCardFinish: {
			on: {
				EDIT_CARD: {
					target: 'CardList',
					actions: [{ type: 'editCard' }],
				},
				CHANGE_FIELD: {
					actions: [{ type: 'changeFieldAddCardFinish' }],
				},
			},
		},
	},
});
