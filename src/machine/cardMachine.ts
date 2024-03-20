import { setup, assign } from 'xstate';
import { CardInfo, CardMachineContext, CardMachineEvent } from '../types';
import {
  setLocalStorageItem,
  CARD_STORAGE_KEY,
  getLocalStorageItem,
} from '../utils/localStorage';

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
    context: CardMachineContext;
    events: CardMachineEvent;
  },
  actions: {
    updateCardState: assign({
      cardState: ({ context, event }) => {
        const { type } = event;
        if (
          type === 'UPDATE_EXPIRATION_DATE' ||
          type === 'UPDATE_CARD_NUMBER' ||
          type === 'UPDATE_PASSWORD'
        ) {
          const { key, value } = event.payload;

          return {
            ...context.cardState,
            [key]: { ...value },
          };
        }

        if (
          type === 'UPDATE_OWNER' ||
          type === 'UPDATE_SECURITY_CODE' ||
          type === 'UPDATE_NICKNAME' ||
          type === 'UPDATE_BRAND'
        ) {
          const { key, value } = event.payload;

          return {
            ...context.cardState,
            [key]: value,
          };
        }

        return context.cardState;
      },
    }),
    saveCard: assign({
      cardList: ({ context, event }) => {
        const { cardList } = context;
        if (event.type === 'SAVE_CARD_LIST') {
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
        }

        return context.cardList;
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
          actions: 'updateCardState',
        },
        SAVE_CARD_LIST: {
          target: 'card-list',
          actions: ['saveCard', 'saveToLocalStorage', 'resetCardState'],
        },
        GO_CARD_LIST: 'card-list',
      },
    },

    'edit-card-name': {
      on: {
        UPDATE_NICKNAME: {
          actions: 'updateCardState',
        },
        SAVE_CARD_LIST: {
          target: 'card-list',
          actions: ['saveCard', 'saveToLocalStorage', 'resetCardState'],
        },
        GO_CARD_LIST: {
          target: 'card-list',
          reenter: true,
        },
      },
    },

    'card-list': {
      on: {
        GO_ADD_CARD: {
          target: 'add-card',
          actions: 'resetCardState',
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
        GO_EDIT_CARD_NAME: {
          target: 'edit-card-name',
        },
      },
    },

    'add-card': {
      on: {
        UPDATE_BRAND: {
          actions: 'updateCardState',
        },
        UPDATE_CARD_NUMBER: {
          actions: 'updateCardState',
        },

        UPDATE_EXPIRATION_DATE: {
          actions: 'updateCardState',
        },

        UPDATE_OWNER: {
          actions: 'updateCardState',
        },

        UPDATE_SECURITY_CODE: {
          actions: 'updateCardState',
        },

        UPDATE_PASSWORD: {
          actions: 'updateCardState',
        },

        GO_ADD_CARD_SUCCESS: 'add-card-success',
        GO_CARD_LIST: {
          target: 'card-list',
          reenter: true,
        },
      },
    },
  },
});
