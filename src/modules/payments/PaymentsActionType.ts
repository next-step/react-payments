export type NewCardInfo = {
	id?: string;
	name?: string;
	number?: string;
	cvc?: string;
	expiry?: string;
	password1?: string;
	password2?: string;
	title?: string;
	backgroundColor?: string;
};
export const ADD_CARD_INFO = 'ADD_CARD_INFO';
type AddCardInfo = {
	type: typeof ADD_CARD_INFO;
	newCardInfo: NewCardInfo;
};

export const ADD_CARD = 'ADD_CARD';
type AddCard = {
	type: typeof ADD_CARD;
	nickname?: string;
};

export type SelectedCardInfo = Exclude<NewCardInfo, null | undefined> | null;
export const SET_SELECTED_CARD = 'SET_SELECTED_CARD';
type SetSelectedCard = {
	type: typeof SET_SELECTED_CARD;
	selectedCard: SelectedCardInfo;
};

export type ActionType = AddCardInfo | AddCard | SetSelectedCard;
