/* eslint-disable no-mixed-spaces-and-tabs */
import {
	CARD_NUMBER_LENGTH,
	CARD_PASSWORD_LENGTH,
	CARD_SECURITY_CODE_LENGTH
} from "@/Card/constants";
import { CardInfo } from "@/Card/types/card";
import { makeNewCard } from "@/Card/utils";
import { assertEvent, assign, setup } from "xstate";

const TEMP_CARD_LIST: CardInfo[] = [
	{
		id: 1,
		companyName: "포코",
		cardNumber: {
			first: "1111",
			second: "2222",
			third: "3333",
			fourth: "4444"
		},
		expirationDate: {
			month: "04",
			year: "21"
		},
		ownerName: "SUN",
		securityCode: "123",
		password: {
			first: "1",
			second: "2"
		},
		cardName: "엄카"
	},
	{
		id: 2,
		companyName: "현석",
		cardNumber: {
			first: "1111",
			second: "2222",
			third: "3333",
			fourth: "4444"
		},
		expirationDate: {
			month: "04",
			year: "21"
		},
		ownerName: "SUN",
		securityCode: "123",
		password: {
			first: "1",
			second: "2"
		},
		cardName: "법카"
	}
];

const DEFAULT_CARD: CardInfo = {
	id: 0,
	companyName: "",
	cardNumber: {
		first: "",
		second: "",
		third: "",
		fourth: ""
	},
	expirationDate: {
		month: "",
		year: ""
	},
	ownerName: "",
	securityCode: "",
	password: {
		first: "",
		second: ""
	},
	cardName: ""
};

interface CardContext {
	cards: CardInfo[];
	card: CardInfo;
}

type CardEvent =
	| { type: "ADD_CARD_TO_LIST" }
	| { type: "MAKE_NEW_CARD" }
	| { type: "RESET_CARD" }
	| { type: "NEXT" }
	| { type: "CHANGE_CARD_COMPANY_NAME"; value: string }
	| {
			type: "CHANGE_CARD_NUMBER";
			name: keyof CardInfo["cardNumber"];
			value: string;
	  }
	| {
			type: "CHANGE_EXPIRATION_DATE";
			name: keyof CardInfo["expirationDate"];
			value: string;
	  }
	| { type: "CHANGE_OWNER_NAME"; value: string }
	| { type: "CHANGE_SECURITY_CODE"; value: string }
	| { type: "CHANGE_PASSWORD"; name: keyof CardInfo["password"]; value: string }
	| { type: "CHANGE_CARD_NAME"; value: string }
	| { type: "CARD_INFO_CHECK" }
	| { type: "CARD_NAME_CHECK" }
	| { type: "SET_CARD_COMPANY_NAME_TO_CARD_NAME" };

export const cardMachine = setup({
	types: {} as {
		context: CardContext;
		events: CardEvent;
	},
	actions: {
		ADD_CARD_TO_LIST: assign({
			cards: ({ context, event }) => {
				assertEvent(event, "ADD_CARD_TO_LIST");
				return [...context.cards, context.card];
			}
		}),
		RESET_CARD: assign({
			card: ({ event }) => {
				assertEvent(event, "RESET_CARD");
				return DEFAULT_CARD;
			}
		}),
		NEXT: assign({
			card: ({ context, event }) => {
				assertEvent(event, "NEXT");
				return {
					...context.card
				};
			}
		}),
		CHANGE_CARD_COMPANY_NAME: assign({
			card: ({ context, event }) => {
				assertEvent(event, "CHANGE_CARD_COMPANY_NAME");
				return {
					...context.card,
					companyName: event.value
				};
			}
		}),
		CHANGE_CARD_NUMBER: assign({
			card: ({ context, event }) => {
				assertEvent(event, "CHANGE_CARD_NUMBER");
				return {
					...context.card,
					cardNumber: {
						...context.card.cardNumber,
						[event.name]: event.value
					}
				};
			}
		}),
		CHANGE_EXPIRATION_DATE: assign({
			card: ({ context, event }) => {
				assertEvent(event, "CHANGE_EXPIRATION_DATE");
				return {
					...context.card,
					expirationDate: {
						...context.card.expirationDate,
						[event.name]: event.value
					}
				};
			}
		}),
		CHANGE_OWNER_NAME: assign({
			card: ({ context, event }) => {
				assertEvent(event, "CHANGE_OWNER_NAME");
				return {
					...context.card,
					ownerName: event.value
				};
			}
		}),
		CHANGE_SECURITY_CODE: assign({
			card: ({ context, event }) => {
				assertEvent(event, "CHANGE_SECURITY_CODE");
				return {
					...context.card,
					securityCode: event.value
				};
			}
		}),
		CHANGE_PASSWORD: assign({
			card: ({ context, event }) => {
				assertEvent(event, "CHANGE_PASSWORD");
				return {
					...context.card,
					password: {
						...context.card.password,
						[event.name]: event.value
					}
				};
			}
		}),
		CHANGE_CARD_NAME: assign({
			card: ({ context, event }) => {
				assertEvent(event, "CHANGE_CARD_NAME");
				return {
					...context.card,
					cardName: event.value
				};
			}
		}),
		SET_CARD_COMPANY_NAME_TO_CARD_NAME: assign({
			card: ({ context }) => {
				return {
					...context.card,
					cardName: context.card.companyName
				};
			}
		})
	},
	schemas: {
		events: {
			CARD_INFO_CHECK: {
				type: "object",
				properties: {}
			},
			CARD_NAME_CHECK: {
				type: "object",
				properties: {}
			},
			PREV: {
				type: "object",
				properties: {}
			}
		}
	},
	guards: {
		isAllCardInfoFilled: ({ context }) => {
			return (
				Object.values(context.card.cardNumber).every(
					(value) => value.length === CARD_NUMBER_LENGTH
				) &&
				Object.values(context.card.expirationDate).every(
					(value) => value.length === 2
				) &&
				context.card.securityCode.length === CARD_SECURITY_CODE_LENGTH &&
				Object.values(context.card.password).every(
					(value) => value.length === CARD_PASSWORD_LENGTH
				)
			);
		},
		isAllCardNameFilled: ({ context }) => {
			return context.card.cardName.length > 0;
		}
	}
}).createMachine({
	/** @xstate-layout N4IgpgJg5mDOIC5QGMCGAnCBZVyAWAlgHZgB0WAggNICiA+gHI0DqdAwhQEoAiAxBAHsSpWABdUosmkw58xMpVqMW7LtwDaABgC6iUAAcBsAqIJC9IAB6IAjAFYAzACZSANid3NDzwE4A7AAcfo4ANCAAnoiudi4Bmj42mgAs-il2fq4Avplh0ti4hMKK9EysHDykxABmArxsABIUDADi9ABCTVSMFFg0WrpIIIbGpuaD1gg2Nn6kfn4ODgE+SX4+rkl27mGRCHMzTjYBcUlOgTYnSdm5GPlyRdQlKuXclUQ1dY0t9M+MAKpYbRonH6FmGJjMRAsE0SAVITgcSW8AQcayc7lcrm2UQCNjh0T8Ng8rgcrjmNiuIDyskKCgeyjKale7waTVadBoAA0AAoASU4FAAKjyAPIMOjcQV9HSgozgsagCZrWZLTTpBYLfx2GxYhB2AJ2UgOQl2OxJVXuHxeClUgrych00qqCrVWosr50YXMJicbq9EGDMGjSHjWyJUgBRF+Jxm4kBUkrHVJJaGuw+FEmpOW7yXHKUm7Uu3FelOl4uj6s+gAZRobF+nB5AoAmuxhdwpQMDLKg1DbJoXN57Krkmj4fEdSiHKQY6dkg5VnMVtb87b7kpHc8ma7PmyuRRK5XmMKeP7OyMIT3JgdSD4nGsNjiR6mkjrbzMNkb3zOtQ4lzIV7S1yeRkyx+HkGAAMWFdh6hrKgTyGLtzxDBBFlca8fAw00AlvOcTjsHUghmUkbFRQITVvJxf1uGl7UAhlnTeV01DoMDIOg2D1BsDsELPeUrEQAl0Iw4SROEl8kjQnxHHsRFswcPsc2uP87gAx56NLRjeE4GhqwFEt4MDJCFVsGI3CTJIpnmM0b0OHV7FxTRHL7G9o08Cy-CogtVzUktSDyBhUAAWzAct3R+BgenbGVeODYzdiTFM0zNeF7CkgIdUCJIp1cI4kg2Jx4QOAJPP-WifI3fygpC8LIvYtg4OlANEL4xVBMJFIUgyQIvD8AiEkNVD4mCSyPBKlSyuLCqbgC4K6mYiLejquCuOiuVYv4hB-Fxdrln8Uk4jnDKpMNfUNnaud9SyXMbXGihuD4O7uBLOgBSggAZHlKwFAzmvW6F5lxFViTOj85h1dwZj1aMggOJwI1vMaaO03StJ0mg9OeH6YovQk7MoikiAECA4AsG6aVW7tkIAWhJHUqeCKcRNWc4+2mfGlOowsHSAngKaMjb4SE0TRLjcHJxSYTmeS6ZyWu5dxqLddgMYvmWtsIJGYwpZSXktN0oiRAglhGXSP1GIb0Rrm6N8yrgtVv6BOOrUTQyNZznhHwCP1KcDjTdwSUCAlLe8ybGXAsDPvqe2caRUh0hxazzlcZJ9Z2I4XBs5YbBRDJkR-OXlJox7o+Qmx1gNW8cqWXwYhNcHPHDeJNFWI0fAjWWOa8shkfRku4vSOySMnZE408ZE-HMjzskyIA */
	initial: "MAKE_NEW_CARD",
	id: "cardMachine",
	context: {
		cards: TEMP_CARD_LIST,
		card: makeNewCard(TEMP_CARD_LIST.length)
	},
	states: {
		MAKE_NEW_CARD: {
			initial: "info",
			onDone: {
				target: "ADD"
			},
			states: {
				info: {
					on: {
						CHANGE_CARD_COMPANY_NAME: {
							actions: "CHANGE_CARD_COMPANY_NAME"
						},
						CHANGE_CARD_NUMBER: {
							actions: "CHANGE_CARD_NUMBER"
						},
						CHANGE_EXPIRATION_DATE: {
							actions: "CHANGE_EXPIRATION_DATE"
						},
						CHANGE_OWNER_NAME: {
							actions: "CHANGE_OWNER_NAME"
						},
						CHANGE_SECURITY_CODE: {
							actions: "CHANGE_SECURITY_CODE"
						},
						CHANGE_PASSWORD: {
							actions: "CHANGE_PASSWORD"
						},
						CARD_INFO_CHECK: [
							{
								target: "cardName",
								guard: "isAllCardInfoFilled"
							},
							{
								target: "info"
							}
						],
						RESET_CARD: {
							actions: "RESET_CARD"
						}
					}
				},
				cardName: {
					on: {
						CHANGE_CARD_NAME: {
							actions: "CHANGE_CARD_NAME"
						},
						CARD_NAME_CHECK: [
							{
								target: "FINISH",
								guard: "isAllCardNameFilled"
							},
							{
								target: "FINISH",
								actions: "SET_CARD_COMPANY_NAME_TO_CARD_NAME"
							}
						]
					}
				},
				FINISH: {
					type: "final",
					target: "ADD"
				}
			}
		},
		ADD: {
			on: {
				ADD_CARD_TO_LIST: {
					actions: "ADD_CARD_TO_LIST",
					target: "RESET"
				}
			}
		},
		RESET: {
			on: {
				RESET_CARD: {
					actions: "RESET_CARD",
					target: "MAKE_NEW_CARD"
				}
			}
		}
	}
});
