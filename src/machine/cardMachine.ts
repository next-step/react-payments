import { setup, assign } from 'xstate';
import { CardInfo } from '../types';
import {
  setLocalStorageItem,
  CARD_STORAGE_KEY,
  getLocalStorageItem,
} from '../utils/localStorage';
import { PAGES } from '../constants/pages';

const initialCardState: CardInfo = {
  id: '',
  brand: { label: '', color: '' },
  numbers: { first: '', second: '', third: '', fourth: '' },
  owner: '',
  expiration: { month: '', year: '' },
  password: { first: '', second: '' },
  securityCode: '',
  nickname: '',
  createdAt: '',
};

export const cardMachine = setup({
  types: {} as {
    context: {
      cardState: CardInfo;
      cardList: CardInfo[];
    };
    events:
      | { type: 'UPDATE_CARD_NUMBER'; value: CardInfo['numbers'] }
      | {
          type: 'UPDATE_EXPIRATION_DATE';
          value: CardInfo['expiration'];
        }
      | { type: 'UPDATE_OWNER'; value: CardInfo['owner'] }
      | {
          type: 'UPDATE_SECURITY_CODE';
          value: CardInfo['securityCode'];
        }
      | { type: 'UPDATE_PASSWORD'; value: CardInfo['password'] }
      | { type: 'UPDATE_NICKNAME'; value: CardInfo['nickname'] }
      | { type: 'UPDATE_BRAND'; value: CardInfo['brand'] }
      | { type: 'RESET_CARD_INFO' }
      | { type: 'SUBMIT_CARD' }
      | { type: 'SAVE_CARD_LIST'; value: CardInfo }
      | { type: 'DELETE_CARD'; value: string }
      | { type: 'GET_CARD_INFO'; value: string }
      | { type: 'SAVE_TO_LOCALSTORAGE'; value: CardInfo[] }
      | { type: PAGES.CARD_LIST }
      | { type: PAGES.ADD_CARD }
      | { type: PAGES.ADD_CARD_SUCCESS }
      | { type: PAGES.EDIT_CARD_NAME };
  },
  actions: {
    updateNickname: assign({
      cardState: ({ context, event }) => {
        if (event.type === 'UPDATE_NICKNAME') {
          return { ...context.cardState, nickname: event.value };
        }

        return context.cardState;
      },
    }),
    resetCardState: assign({
      cardState: () => {
        return initialCardState;
      },
    }),
    saveToLocalStorage: ({ context }) => {
      const { cardList } = context;
      setLocalStorageItem({ key: CARD_STORAGE_KEY, item: cardList });
    },
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMCGAnCBlALqnYAdKhBALRqZmwCuyycsAxAKoAKAIgIIAqAogH0AcgEkAwgGkhXALJ8A2gAYAuolAAHAPawAljh2aAdmpAAPRGQBMARkLXrATgCsANgAczxdfcPrAGhAAT0QAFksHQgB2N0tFSycAZkUQt2s4pwBfDIDKbDwCYlIKDHJaekYmLC4ANUExLgAlDgEAGREsHiVVJBAtXX0jE3MESxDIwkUnWPdFBOtIp0iHBIDghBdFRUJY1JdLfZCEh2WsnJLcfCISclzqOgZYZluAGx1YHC6TPr0DYx7h0bjSbTNyzeaLZarRBOJxbI6uBzpNyReJuU4gXIXAqQPTFKiGVAAWzArE4vEEokk0jknx63wGf1AwzcqUITg8C1B3iWCUiUIQrIS+0RLhc815kUi6Mx+SILzeOCY1zxEFpGm0P0G-0QewiUw2NkRIXsbhc-JRIQmc0ULgW8RSQul51lhHl7yYHD4LT4-AE9Saat6GoZQ1CCTc2w8yRCDltyzcKyC0P2hATiycYz2KMy2QxzsurpKZFe7oA4j6-Y1miIhAAxADygfpv1D63CbMsBscyRNZqTCGsTlsITGsxCGeRm0HTswWKuRVypO4voAQg0uEIOE3gy3tQKUYQEiOHKlB7FrHNzd5D4cXCFRTYHw4Z3kC8rF+xl3Uq8IWDIV3wDTbv0u5MogbhhHYMQ2JYCQwsksb8nstiKCy96ipENopGiuYym+C4lEu5ICHwAAabAiOuPAiPWQgCF+wGaoyZjgUkUQJC4vhzCe8S+PyUxOKmCRCqakSOC4R44Wcs4uu+hGfsR9YAOpCIBjEhnuk6EC4UyWBB7hhCOiZrIcWyLKkNqRO4eyKFKuH5gUcmYERvpYHwYgsA0Ig8AAmn69aeupoEsQKHHbLGqTImKHFTPywmCUK4SdqkVk2hJL5zoUNzyWSvpsFwWBYEp9YBioXw7lqYECjCqamrqxpOM4R78qMWyWe4koooiObSa+jkEc5TmlPcjBBZVIW6h2XZGr2-KpBEel7GMmYxiiGWyQNEBMG6HxlXSFXMcMmGWIe4b3ss3hxKkSExmyI6KBdRqxiEWS5oYmgQHAJh4QQ5UgeNwxkJxdiOK4Hiwt4Hj+P2QMTJsXj7BsjXCTpPV5jJ+HZVQZQPPA+3-Yd0JmciozWCEyRzCOSFTNskwZrGCzPc+9kY9iEC4rcBLEn9TGtoibWNaCsHIokhz8tYrLmfYEsOGE5kJOtBY7TzGlVZmh6RDGd6JD2yJ8v2d4RJhMJa4zhuK-1WMQCrwXDPzEyC3E4YLEexngdegtWZr0QnrLr0ZEAA */
  id: 'cardState',
  initial: 'card-list',
  context: {
    cardState: initialCardState,
    cardList: getLocalStorageItem({ key: CARD_STORAGE_KEY }) || [],
  },
  states: {
    'add-card-success': {
      on: {
        UPDATE_NICKNAME: {
          actions: assign({
            cardState: ({ context, event }) => {
              return { ...context.cardState, nickname: event.value };
            },
          }),
        },
        SAVE_CARD_LIST: {
          target: 'card-list',
          actions: [
            assign({
              cardList: ({ context, event }) => {
                const { cardList } = context;
                const { value: newCardState } = event;

                if (!newCardState.nickname) {
                  newCardState.nickname = newCardState.brand.label;
                }
                newCardState.id = Object.values(newCardState.numbers).join('');
                newCardState.createdAt = new Date().toISOString();

                const existsCard = cardList.find(
                  (card) => card.id === newCardState.id
                );

                if (existsCard) {
                  return cardList
                    .map((card) => (card === existsCard ? newCardState : card))
                    .sort((a, b) =>
                      new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1
                    );
                } else {
                  return [newCardState, ...cardList];
                }
              },
            }),
            'saveToLocalStorage',
            assign({
              cardState: () => {
                return initialCardState;
              },
            }),
          ],
        },
        'card-list': 'card-list',
      },
    },

    'edit-card-name': {
      on: {
        UPDATE_NICKNAME: {
          actions: ['updateNickname'],
        },
        'card-list': {
          target: 'card-list',
          reenter: true,
        },
      },
    },

    'card-list': {
      on: {
        'add-card': {
          target: 'add-card',
          actions: assign({
            cardState: () => {
              return initialCardState;
            },
          }),
        },
        DELETE_CARD: {
          actions: [
            assign({
              cardList: ({ context, event }) => {
                const { cardList } = context;
                const { value: id } = event;
                const newCardList = cardList.filter((card) => card.id !== id);

                return newCardList;
              },
            }),
            'saveToLocalStorage',
          ],
        },

        GET_CARD_INFO: {
          actions: assign({
            cardState: ({ context, event }) => {
              const { cardList } = context;
              const { value: id } = event;
              const targetCard = cardList.filter((card) => card.id === id);

              return targetCard[0];
            },
          }),

          target: 'edit-card-name',
        },
      },
    },

    'add-card': {
      on: {
        UPDATE_BRAND: {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              brand: { ...event.value },
            }),
          }),
        },

        UPDATE_CARD_NUMBER: {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              numbers: { ...event.value },
            }),
          }),
        },

        UPDATE_EXPIRATION_DATE: {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              expiration: { ...event.value },
            }),
          }),
        },

        UPDATE_OWNER: {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              owner: event.value,
            }),
          }),
        },

        UPDATE_SECURITY_CODE: {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              securityCode: event.value,
            }),
          }),
        },

        UPDATE_PASSWORD: {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              password: { ...event.value },
            }),
          }),
        },

        'add-card-success': 'add-card-success',
        'card-list': {
          target: 'card-list',
          reenter: true,
        },
      },
    },
  },
});
