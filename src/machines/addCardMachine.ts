import { createMachine, assign } from 'xstate';
import { createActorContext } from '@xstate/react';
import { CARD_COMPANY_MAP } from 'src/constants/card.ts';

export interface CardInfo {
	cardNumberFirstSegment: string;
	cardNumberSecondSegment: string;
	cardNumberThirdSegment: string;
	cardNumberFourthSegment: string;
	cardOwnerName: string;
	cardExpirationDate: string;
	cardPasswordFirstDigit: string;
	cardPasswordSecondDigit: string;
	cardSecurityCode: string;
	cardNickname: string;
	cardCompanyCode: string;
}

export interface CardInfoWithId extends CardInfo {
	id: string;
}

export const initialCardInfo: CardInfo = {
	cardNumberFirstSegment: '',
	cardNumberSecondSegment: '',
	cardNumberThirdSegment: '',
	cardNumberFourthSegment: '',
	cardOwnerName: '',
	cardExpirationDate: '',
	cardPasswordFirstDigit: '',
	cardPasswordSecondDigit: '',
	cardSecurityCode: '',
	cardNickname: '',
	cardCompanyCode: '',
};

interface CardMachineContext {
	cardInfo: CardInfo;
	cardList: CardInfoWithId[];
	selectedCard: CardInfoWithId;
}

type CardMachineEvent =
	| { type: 'CHANGE_FIELD'; field: keyof CardInfo; value: string }
	| { type: 'GO_TO_FORM' }
	| { type: 'ADD_CARD' }
	| { type: 'EDIT_CARD' }
	| { type: 'BACK' }
	| { type: 'TOGGLE' }
	| { type: 'SELECT_CARD'; value: CardInfoWithId }
	| { type: 'DELETE_CARD'; value: string };

export const addCardMachine = createMachine({
	id: 'addCard',
	types: {
		events: {} as CardMachineEvent,
		context: {} as CardMachineContext,
	},
	initial: 'CardList',
	context: {
		cardInfo: { ...initialCardInfo },
		cardList: [],
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
					actions: assign(({ event }) => ({ selectedCard: event.value })),
				},
				DELETE_CARD: {
					actions: assign(({ context, event }) => ({
						cardList: context.cardList.filter(card => card.id !== event.value),
					})),
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
					actions: assign(({ context }) => ({
						cardList: [...context.cardList, { ...context.cardInfo, id: Date.now().toString() }],
					})),
				},
				CHANGE_FIELD: {
					target: 'AddCardForm.enterCardInfo',
					actions: assign(({ context, event }) => ({
						cardInfo: { ...context.cardInfo, [event.field]: event.value },
					})),
				},
				BACK: {
					target: 'CardList',
					actions: assign({ cardInfo: { ...initialCardInfo } }),
				},
			},
		},
		AddCardFinish: {
			on: {
				EDIT_CARD: {
					target: 'CardList',
					actions: assign(({ context }) => ({
						cardList: context.cardList.map(card =>
							card.id === context.selectedCard.id
								? {
										...context.selectedCard,
										cardNickname:
											context.selectedCard.cardNickname ||
											CARD_COMPANY_MAP[context.selectedCard.cardCompanyCode]?.name ||
											'',
									}
								: card,
						),
						selectedCard: { ...initialCardInfo, id: '' },
					})),
				},
				CHANGE_FIELD: {
					actions: assign(({ context, event }) => ({
						selectedCard: { ...context.selectedCard, [event.field]: event.value },
					})),
				},
			},
		},
	},
});

export const {
	Provider: AddCardMachineProvider,
	useSelector: useAddCardMachineSelector,
	useActorRef: useAddCardMachineActorRef,
} = createActorContext(addCardMachine);
