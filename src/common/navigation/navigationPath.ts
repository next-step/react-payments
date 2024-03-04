export type CARD_LIST_FUNNEL_KEY =
	| "CARD_LIST"
	| "ADD_CARD"
	| "ADD_CARD_SUCCESS";

export const ADD_CARD_FUNNEL: Record<CARD_LIST_FUNNEL_KEY, string> = {
	CARD_LIST: "/",
	ADD_CARD: "/?step=add",
	ADD_CARD_SUCCESS: "/?step=success"
};

export default {
	ADD_CARD_FUNNEL
};
