import { assign, setup } from "xstate";
import { cardMachine } from "../card/cardMachine";

export const CARD_FUNNEL_LIST = [
	"CARD_LIST",
	"ADD_CARD",
	"ADD_CARD_SUCCESS"
] as const;

export type CARD_LIST_FUNNEL_KEY = (typeof CARD_FUNNEL_LIST)[number];

interface CardFunnelContext {
	currentPage: CARD_LIST_FUNNEL_KEY;
}

export type CARD_FUNNEL_EVENT_TYPE =
	| "GO_TO_CARD_LIST"
	| "GO_TO_ADD_CARD"
	| "GO_TO_ADD_CARD_SUCCESS"
	| "PREV";

type CardFunnelEvent =
	| { type: "GO_TO_CARD_LIST" }
	| { type: "GO_TO_ADD_CARD" }
	| { type: "GO_TO_ADD_CARD_SUCCESS" }
	| { type: "PREV" };

export const cardFunnelMachine = setup({
	types: {} as {
		context: CardFunnelContext;
		events: CardFunnelEvent;
	},
	actors: {
		cardMachine
	},
	actions: {
		GO_TO_CARD_LIST: assign({
			currentPage: "CARD_LIST"
		}),
		GO_TO_ADD_CARD: assign({
			currentPage: "ADD_CARD"
		}),
		GO_TO_ADD_CARD_SUCCESS: assign({
			currentPage: "ADD_CARD_SUCCESS"
		})
	}
}).createMachine({
	/** @xstate-layout N4IgpgJg5mDOIC5QGMCGAnCAxArgOzzABsA6ABQEEBxAUQGUSKARJgfQGEKAlJgYioDyrACpDmbTj1Z0Aqu3b06AbQAMAXUSgADgHtYASwAu+nXk0gAHogBM1lSTsA2AJzOVAZgCMzgCyOfnu4ANCAAnojuAByRJD7OntaekQCs3u4+GT4AvlkhaJi4BMTk1PSMLBzcfGRcNABqqhpIILoGxqbmVgi29k6uHt5+AcFhiMleJM6OAOyzPomejtaOOXkY2PiEpJS0DOKVUrLyivxCogdsADIAknTCjeatRiZmzV3Tnp4OKtMq1smOKLzVwhcIIKIxOIJJKpZzpHwA1YgfIbIrbUoMSRXW7CU4iMQVLEPZpPdqvUDvT7fX7-QGRYHOUE2BEkFSePxLSLWX5LZzWHK5EB4HQQODmFGFLaPPTPDpvRAAWn+JGm7hUyRUP25gWskXcySZCCV7kmKXc3IybmcGus2UFEs2xR29GlbRenRs1gcLjifOmupmiwNowQn3sqQ56t1iVsK3t60lTox5QkVVdsvJlkQv29vlc3IDH2mhu5jhIjkWPXiLmmyX58YKjvRuxTF2kcgUdDo6bJHoQcRidhpyVm1pUXMNAS+RdHmsc0WmGSRDrRJRbWNYNzuPfd8oQ8S+CWies8yR87nSjkn7IcnlmNq5418dpyQA */
	id: "cardFunnel",
	initial: "PAGES",
	context: {
		currentPage: "CARD_LIST"
	},
	invoke: {
		src: "cardMachine"
	},
	states: {
		PAGES: {
			initial: "CARD_LIST",
			invoke: {
				src: "cardMachine",
				id: "cardMachine"
			},
			states: {
				ADD_CARD: {
					on: {
						GO_TO_ADD_CARD_SUCCESS: {
							actions: "GO_TO_ADD_CARD_SUCCESS",
							target: "ADD_CARD_SUCCESS"
						},
						PREV: {
							actions: assign({
								currentPage: "CARD_LIST"
							}),
							target: "CARD_LIST"
						}
					}
				},
				ADD_CARD_SUCCESS: {
					on: {
						GO_TO_CARD_LIST: {
							actions: "GO_TO_CARD_LIST",
							target: "CARD_LIST"
						}
					}
				},
				CARD_LIST: {
					on: {
						GO_TO_ADD_CARD: {
							actions: "GO_TO_ADD_CARD",
							target: "ADD_CARD"
						}
					}
				}
			}
		}
	}
});
