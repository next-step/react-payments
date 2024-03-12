import { assign, setup } from 'xstate';
import { createActorContext } from '@xstate/react';
import { nanoid } from 'nanoid';

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

export const addCardMachineSetup = setup({
	types: {
		events: {} as CardMachineEvent,
		context: {} as CardMachineContext,
	},
	actions: {
		selectCard: assign(({ event, context }) =>
			event.type === 'SELECT_CARD' ? { selectedCard: event.value } : { selectedCard: context.selectedCard },
		),
		deleteCard: assign(({ context, event }) =>
			event.type === 'DELETE_CARD'
				? {
						cardList: context.cardList.filter(card => card.id !== event.value),
					}
				: { cardList: context.cardList },
		),
		addCard: assign(({ context }) => ({
			cardList: [...context.cardList, { ...context.cardInfo, id: nanoid() }],
		})),
		editCard: assign(({ context }) => ({
			cardList: context.cardList.map(card =>
				card.id === context.selectedCard.id
					? {
							...context.selectedCard,
							cardNickname:
								context.selectedCard.cardNickname || CARD_COMPANY_MAP[context.selectedCard.cardCompanyCode]?.name || '',
						}
					: card,
			),
			selectedCard: { ...initialCardInfo, id: '' },
		})),
		changeFieldAddCardForm: assign(({ context, event }) =>
			event.type === 'CHANGE_FIELD'
				? { cardInfo: { ...context.cardInfo, [event.field]: event.value } }
				: { cardInfo: { ...context.cardInfo } },
		),
		changeFieldAddCardFinish: assign(({ context, event }) =>
			event.type === 'CHANGE_FIELD'
				? { selectedCard: { ...context.selectedCard, [event.field]: event.value } }
				: { selectedCard: { ...context.selectedCard } },
		),
		resetAddCardForm: assign({ cardInfo: { ...initialCardInfo } }),
	},
});

export const addCardMachine = addCardMachineSetup.createMachine({
	id: 'addCard',
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

export const addCardMachineActor = createActorContext(addCardMachine);

export const {
	Provider: AddCardMachineProvider,
	useSelector: useAddCardMachineSelector,
	useActorRef: useAddCardMachineActorRef,
} = addCardMachineActor;
