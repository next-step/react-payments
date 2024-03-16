import { assign, createMachine, enqueueActions } from 'xstate';
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
	| { type: 'CHANGE_FIELD'; field: keyof CardInfo; value: string; maxLength?: number }
	| { type: 'GO_TO_FORM' }
	| { type: 'ADD_CARD' }
	| { type: 'EDIT_CARD' }
	| { type: 'BACK' }
	| { type: 'TOGGLE' }
	| { type: 'SELECT_CARD'; value: CardInfoWithId }
	| { type: 'DELETE_CARD'; value: string }
	| { type: 'AUTO_FOCUS'; maxLength: number; field: keyof CardInfo }
	| { type: 'FOCUS_CARD_NUMBER_FIRST_SEGMENT' }
	| { type: 'FOCUS_CARD_NUMBER_SECOND_SEGMENT' }
	| { type: 'FOCUS_CARD_NUMBER_THIRD_SEGMENT' }
	| { type: 'FOCUS_CARD_NUMBER_FOURTH_SEGMENT' }
	| { type: 'FOCUS_CARD_OWNER_NAME' }
	| { type: 'FOCUS_CARD_EXPIRATION_DATE' }
	| { type: 'FOCUS_CARD_PASSWORD_FIRST_DIGIT' }
	| { type: 'FOCUS_CARD_PASSWORD_SECOND_DIGIT' }
	| { type: 'FOCUS_CARD_SECURITY_CODE' };

type CardMachineActions =
	| { type: 'selectCard' }
	| { type: 'deleteCard' }
	| { type: 'addCard' }
	| { type: 'editCard' }
	| { type: 'changeFieldAddCardForm' }
	| { type: 'changeFieldAddCardFinish' }
	| { type: 'resetAddCardForm' };

type CardMachineGuards = { type: 'hasMaxLength' };

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
						initial: 'cardNumberFirstSegment',
						on: {
							TOGGLE: {
								target: 'selectCardCompany',
							},
							FOCUS_CARD_NUMBER_FIRST_SEGMENT: {
								target: '.cardNumberFirstSegment',
							},
							FOCUS_CARD_NUMBER_SECOND_SEGMENT: {
								target: '.cardNumberSecondSegment',
							},
							FOCUS_CARD_NUMBER_THIRD_SEGMENT: {
								target: '.cardNumberThirdSegment',
							},
							FOCUS_CARD_NUMBER_FOURTH_SEGMENT: {
								target: '.cardNumberFourthSegment',
							},
							FOCUS_CARD_OWNER_NAME: {
								target: '.cardOwnerName',
							},
							FOCUS_CARD_EXPIRATION_DATE: {
								target: '.cardExpirationDate',
							},
							FOCUS_CARD_PASSWORD_FIRST_DIGIT: {
								target: '.cardPasswordFirstDigit',
							},
							FOCUS_CARD_PASSWORD_SECOND_DIGIT: {
								target: '.cardPasswordSecondDigit',
							},
							FOCUS_CARD_SECURITY_CODE: {
								target: '.cardSecurityCode',
							},
						},
						states: {
							cardNumberFirstSegment: {
								on: {
									AUTO_FOCUS: {
										target: 'cardNumberSecondSegment',
										guard: { type: 'hasMaxLength' },
									},
								},
							},
							cardNumberSecondSegment: {
								on: {
									AUTO_FOCUS: {
										target: 'cardNumberThirdSegment',
										guard: { type: 'hasMaxLength' },
									},
								},
							},
							cardNumberThirdSegment: {
								on: {
									AUTO_FOCUS: {
										target: 'cardNumberFourthSegment',
										guard: { type: 'hasMaxLength' },
									},
								},
							},
							cardNumberFourthSegment: {
								on: {
									AUTO_FOCUS: {
										target: 'cardOwnerName',
										guard: { type: 'hasMaxLength' },
									},
								},
							},
							cardOwnerName: {
								on: {
									AUTO_FOCUS: {
										target: 'cardExpirationDate',
										guard: { type: 'hasMaxLength' },
									},
								},
							},
							cardExpirationDate: {
								on: {
									AUTO_FOCUS: {
										target: 'cardSecurityCode',
										guard: { type: 'hasMaxLength' },
									},
								},
							},
							cardPasswordFirstDigit: {
								on: {
									AUTO_FOCUS: {
										target: 'cardPasswordSecondDigit',
										guard: { type: 'hasMaxLength' },
									},
								},
							},
							cardPasswordSecondDigit: {},
							cardSecurityCode: {
								on: {
									AUTO_FOCUS: {
										target: 'cardPasswordFirstDigit',
										guard: { type: 'hasMaxLength' },
									},
								},
							},
						},
					},
				},
				on: {
					ADD_CARD: {
						target: 'AddCardFinish',
						actions: [{ type: 'addCard' }],
					},
					BACK: {
						target: 'CardList',
						actions: [{ type: 'resetAddCardForm' }],
					},
					CHANGE_FIELD: {
						actions: [{ type: 'changeFieldAddCardForm' }],
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

					enqueue.raise({
						type: 'AUTO_FOCUS',
						maxLength: event?.maxLength || Infinity,
						field: event.field,
					});
				}
			}),
			changeFieldAddCardFinish: assign(({ context, event }) =>
				event.type === 'CHANGE_FIELD'
					? { selectedCard: { ...context.selectedCard, [event.field]: event.value } }
					: { selectedCard: { ...context.selectedCard } },
			),
			resetAddCardForm: assign({ cardInfo: { ...initialCardInfo } }),
		},
		guards: {
			hasMaxLength: ({ context, event }) => {
				if (event.type !== 'AUTO_FOCUS') return false;

				const { maxLength, field } = event;

				return context.cardInfo[field].length === maxLength;
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
