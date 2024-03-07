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
}

type CardMachineEvent =
	| { type: 'CHANGE_FIELD'; field: keyof CardInfo; value: string }
	| { type: 'ADD_CARD' }
	| { type: 'NEXT' }
	| { type: 'SUBMIT_CARD' }
	| { type: 'BACK' }
	| { type: 'TOGGLE' };

export const addCardMachine = createMachine<CardMachineContext, CardMachineEvent>(
	{
		predictableActionArguments: true,
		id: 'addCard',
		initial: 'select',
		context: {
			cardInfo: {
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
			},
			cardList: [],
		},
		states: {
			select: {
				on: {
					ADD_CARD: {
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
					NEXT: {
						target: 'nickname',
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
					SUBMIT_CARD: {
						target: 'select',
						actions: ['addCard'],
					},
					CHANGE_FIELD: {
						actions: ['changeField'],
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
			addCard: assign({
				cardList: context => {
					return [...context.cardList, { ...context.cardInfo, id: Date.now().toString() }];
				},
				cardInfo: { ...initialCardInfo },
			}),
			resetCardInfo: assign({
				cardInfo: { ...initialCardInfo },
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
