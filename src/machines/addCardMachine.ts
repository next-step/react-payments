import { assign, createMachine, enqueueActions } from 'xstate';
import { createActorContext } from '@xstate/react';
import { nanoid } from 'nanoid';

import { CARD_COMPANY_MAP, getCardCompanyCodeByCardNumber } from 'src/constants/card';

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
	| { type: 'CHANGE_FIELD'; field: keyof CardInfo; value: string; maxLength?: number }
	| { type: 'GO_TO_FORM' }
	| {
			type: 'ADD_CARD';
			maxLengths: Record<keyof Omit<CardInfo, 'cardNickname' | 'cardCompanyCode' | 'cardOwnerName'>, number>;
	  }
	| { type: 'EDIT_CARD' }
	| { type: 'BACK' }
	| { type: 'TOGGLE' }
	| { type: 'SELECT_CARD'; value: CardInfoWithId }
	| { type: 'DELETE_CARD'; value: string }
	| { type: 'INFER_CARD_COMPANY_CODE' };

type CardMachineActions =
	| { type: 'selectCard' }
	| { type: 'deleteCard' }
	| { type: 'addCard' }
	| { type: 'editCard' }
	| { type: 'changeFieldAddCardForm' }
	| { type: 'changeFieldAddCardFinish' }
	| { type: 'resetAddCardForm' }
	| { type: 'alertAddCardForm'; params: { message: string } }
	| { type: 'inferCardCompanyCode' };

type CardMachineGuards = { type: 'isAddCardFormValid' };

export const addCardMachine = createMachine(
	{
		id: 'addCard',
		initial: 'CardList',
		types: {
			events: {} as CardMachineEvent,
			context: {} as CardMachineContext,
			actions: {} as CardMachineActions,
			guards: {} as CardMachineGuards,
		},
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
					ADD_CARD: [
						{
							target: 'AddCardFinish',
							actions: [{ type: 'addCard' }],
							guard: { type: 'isAddCardFormValid' },
						},
						{
							target: 'AddCardForm.enterCardInfo',
							actions: [{ type: 'alertAddCardForm', params: { message: '카드 정보를 모두 입력해주세요.' } }],
						},
					],
					BACK: {
						target: 'CardList',
						actions: [{ type: 'resetAddCardForm' }],
					},
					CHANGE_FIELD: {
						actions: [{ type: 'changeFieldAddCardForm' }],
					},
					INFER_CARD_COMPANY_CODE: {
						actions: [{ type: 'inferCardCompanyCode' }],
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
	},
	{
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
									context.selectedCard.cardNickname ||
									CARD_COMPANY_MAP[context.selectedCard.cardCompanyCode]?.name ||
									'',
							}
						: card,
				),
				selectedCard: { ...initialCardInfo, id: '' },
			})),
			changeFieldAddCardForm: enqueueActions(({ enqueue, event, context }) => {
				if (event.type === 'CHANGE_FIELD') {
					enqueue.assign({ cardInfo: { ...context.cardInfo, [event.field]: event.value } });
				}

				if (
					event.type === 'CHANGE_FIELD' &&
					(event.field === 'cardNumberSecondSegment' || event.field === 'cardNumberFirstSegment')
				) {
					enqueue.raise({ type: 'INFER_CARD_COMPANY_CODE' });
				}

				if (event.type === 'CHANGE_FIELD' && event.field === 'cardCompanyCode') {
					enqueue.raise({ type: 'TOGGLE' });
				}
			}),
			changeFieldAddCardFinish: assign(({ context, event }) =>
				event.type === 'CHANGE_FIELD'
					? { selectedCard: { ...context.selectedCard, [event.field]: event.value } }
					: { selectedCard: { ...context.selectedCard } },
			),
			resetAddCardForm: assign({ cardInfo: { ...initialCardInfo } }),
			alertAddCardForm: (_, params) => {
				alert(params.message);
			},
			inferCardCompanyCode: assign(({ context }) => {
				const { cardNumberFirstSegment, cardNumberSecondSegment } = context.cardInfo;

				const cardCompanyCode = getCardCompanyCodeByCardNumber({ cardNumberSecondSegment, cardNumberFirstSegment });

				return { cardInfo: { ...context.cardInfo, cardCompanyCode } };
			}),
		},
		guards: {
			isAddCardFormValid: ({ context, event }) => {
				if (event.type !== 'ADD_CARD') return false;

				const { cardInfo } = context;

				const { maxLengths } = event;

				return Object.entries(maxLengths).every(([key, value]) => {
					const target = cardInfo[key as keyof CardInfo];

					return target.length > 0 && target.length === value;
				});
			},
		},
	},
);

export const addCardMachineActor = createActorContext(addCardMachine);

export const {
	Provider: AddCardMachineProvider,
	useSelector: useAddCardMachineSelector,
	useActorRef: useAddCardMachineActorRef,
} = addCardMachineActor;
