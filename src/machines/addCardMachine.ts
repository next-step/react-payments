import { assign, createMachine, enqueueActions } from 'xstate';
import { createActorContext } from '@xstate/react';
import { nanoid } from 'nanoid';

import { CARD_COMPANY_MAP, getCardCompanyCodeByCardNumber } from 'src/constants/card';
import { cardInfoSchema } from 'src/schema/cardInfoSchema';
import type { CardListItemProps } from 'src/steps/card-list/CardListItem';
import type { AddCardFormProps } from 'src/steps/add-card-form/AddCardForm';
import type { AddCardFinishProps } from 'src/steps/add-card-finish/AddCardFinish';

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
	| { type: 'ADD_CARD'; onSubmit?: AddCardFormProps['onSubmit'] }
	| { type: 'ALERT'; message: string }
	| { type: 'EDIT_CARD'; onUpdate?: AddCardFinishProps['onUpdate'] }
	| { type: 'BACK' }
	| { type: 'TOGGLE' }
	| { type: 'SELECT_CARD'; value: CardInfoWithId }
	| { type: 'DELETE_CARD'; value: string; onDelete?: CardListItemProps['onDelete'] }
	| { type: 'INFER_CARD_COMPANY_CODE' }
	| { type: 'GO_TO_FINISH' }
	| { type: 'INITIALIZE_CARD_LIST'; value?: CardInfoWithId[] };

type CardMachineActions =
	| { type: 'selectCard' }
	| { type: 'deleteCard' }
	| { type: 'addCard' }
	| { type: 'editCard' }
	| { type: 'changeFieldAddCardForm' }
	| { type: 'changeFieldAddCardFinish' }
	| { type: 'resetAddCardForm' }
	| { type: 'alertAddCardForm' }
	| { type: 'inferCardCompanyCode' }
	| { type: 'initializeCardList' };

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
				initial: 'beforeInitialize',
				states: {
					beforeInitialize: {
						on: {
							INITIALIZE_CARD_LIST: {
								target: 'afterInitialize',
								actions: [{ type: 'initializeCardList' }],
							},
						},
					},
					afterInitialize: {},
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
							actions: [{ type: 'addCard' }],
						},
					],
					BACK: {
						target: 'CardList.afterInitialize',
						actions: [{ type: 'resetAddCardForm' }],
					},
					CHANGE_FIELD: {
						actions: [{ type: 'changeFieldAddCardForm' }],
					},
					INFER_CARD_COMPANY_CODE: {
						actions: [{ type: 'inferCardCompanyCode' }],
					},
					ALERT: {
						actions: [{ type: 'alertAddCardForm' }],
					},
					GO_TO_FINISH: {
						target: 'AddCardFinish',
					},
				},
			},
			AddCardFinish: {
				on: {
					EDIT_CARD: {
						target: 'CardList.afterInitialize',
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
			deleteCard: enqueueActions(async ({ event, enqueue, context }) => {
				if (event.type === 'DELETE_CARD') {
					try {
						if (event.onDelete) {
							await event.onDelete(event.value);
						}

						enqueue.assign({ cardList: context.cardList.filter(card => card.id !== event.value) });
					} catch (e) {
						enqueue.raise({ type: 'ALERT', message: '카드 삭제에 실패하였습니다.' });
					}
				}
			}),
			addCard: enqueueActions(async ({ enqueue, event, context, check }) => {
				if (event.type === 'ADD_CARD' && check({ type: 'isAddCardFormValid' })) {
					try {
						if (event.onSubmit) {
							await event.onSubmit(context.cardInfo);
						}

						const newId = nanoid();

						enqueue.assign({
							cardList: [...context.cardList, { ...context.cardInfo, id: newId }],
							selectedCard: { ...context.cardInfo, id: newId },
							cardInfo: { ...initialCardInfo },
						});

						enqueue.raise({ type: 'GO_TO_FINISH' });
					} catch (e) {
						enqueue.raise({ type: 'ALERT', message: '카드 등록에 실패하였습니다.' });
					}
				} else {
					enqueue.raise({ type: 'ALERT', message: '카드 정보를 모두 입력해주세요.' });
				}
			}),
			editCard: enqueueActions(async ({ enqueue, context, event }) => {
				if (event.type === 'EDIT_CARD') {
					try {
						const newCardInfo = {
							...context.selectedCard,
							cardNickname:
								context.selectedCard.cardNickname || CARD_COMPANY_MAP[context.selectedCard.cardCompanyCode]?.name || '',
						};

						if (event.onUpdate) {
							await event.onUpdate(newCardInfo);
						}

						assign({
							cardList: context.cardList.map(card => (card.id === context.selectedCard.id ? newCardInfo : card)),
							selectedCard: { ...initialCardInfo, id: '' },
						});
					} catch (e) {
						enqueue.raise({ type: 'ALERT', message: '카드 수정에 실패하였습니다.' });
					}
				}
			}),
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
			alertAddCardForm: ({ event }) => {
				if (event.type === 'ALERT') {
					alert(event.message);
				}
			},
			inferCardCompanyCode: assign(({ context }) => {
				const { cardNumberFirstSegment, cardNumberSecondSegment } = context.cardInfo;

				const cardCompanyCode = getCardCompanyCodeByCardNumber({ cardNumberSecondSegment, cardNumberFirstSegment });

				return { cardInfo: { ...context.cardInfo, cardCompanyCode } };
			}),
			initializeCardList: assign(({ event }) =>
				event.type === 'INITIALIZE_CARD_LIST' ? { cardList: event.value ?? [] } : { cardList: [] },
			),
		},
		guards: {
			isAddCardFormValid: ({ context, event }) => {
				if (event.type !== 'ADD_CARD') return false;

				const { cardInfo } = context;

				return cardInfoSchema.safeParse({ ...cardInfo }).success;
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
