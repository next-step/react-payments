import { createMachine, assign } from 'xstate';
import { createActorContext } from '@xstate/react';

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

const initialCardInfo: CardInfo = {
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
	cardList: (CardInfo & { id: string })[];
	selectedCard: CardInfo & { id: string };
}

type CardMachineEvent =
	| { type: 'CHANGE_FIELD'; field: keyof CardInfo; value: string }
	| { type: 'GO_TO_FORM' }
	| { type: 'ADD_CARD' }
	| { type: 'EDIT_CARD' }
	| { type: 'BACK' }
	| { type: 'TOGGLE' };

export const addCardMachine = createMachine<CardMachineContext, CardMachineEvent>(
	{
		predictableActionArguments: true,
		id: 'addCard',
		initial: 'select',
		context: {
			cardInfo: { ...initialCardInfo },
			cardList: [],
			selectedCard: { ...initialCardInfo, id: '' },
		},
		states: {
			select: {
				on: {
					GO_TO_FORM: {
						target: 'form',
					},
				},
			},
			form: {
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
						target: 'nickname',
						actions: ['addCard'],
					},
					CHANGE_FIELD: {
						target: 'form.enterCardInfo',
						actions: ['changeField'],
					},
					BACK: {
						target: 'select',
						actions: ['resetCardInfo'],
					},
				},
			},
			nickname: {
				on: {
					EDIT_CARD: {
						target: 'select',
						actions: ['editCard'],
					},
					CHANGE_FIELD: {
						actions: ['changeSelectedCardField'],
					},
				},
			},
		},
	},
	{
		actions: {
			changeField: assign({
				cardInfo: (context, event) => {
					if (event.type === 'CHANGE_FIELD') {
						const { field, value } = event;
						return {
							...context.cardInfo,
							[field]: value,
						};
					}

					return { ...context.cardInfo };
				},
			}),
			resetCardInfo: assign({
				cardInfo: { ...initialCardInfo },
			}),
			changeSelectedCardField: assign({
				selectedCard: (context, event) => {
					if (event.type === 'CHANGE_FIELD') {
						const { field, value } = event;
						return {
							...context.selectedCard,
							[field]: value,
						};
					}

					return { ...context.selectedCard };
				},
			}),
			addCard: assign(context => {
				const newCardInfo = { ...context.cardInfo, id: Date.now().toString() };

				return {
					...context,
					cardList: [...context.cardList, newCardInfo],
					selectedCard: newCardInfo,
					cardInfo: { ...initialCardInfo },
				};
			}),
			editCard: assign(context => {
				return {
					...context,
					selectedCard: { ...initialCardInfo, id: '' },
					cardList: context.cardList.map(card => (card.id === context.selectedCard.id ? context.selectedCard : card)),
				};
			}),
		},
	},
);

export type CardMachineType = typeof addCardMachine;

export const {
	Provider: AddCardMachineProvider,
	useSelector: useAddCardMachineSelector,
	useActor: useAddCardMachineActor,
	useActorRef: useAddCardMachineActorRef,
} = createActorContext(addCardMachine);
