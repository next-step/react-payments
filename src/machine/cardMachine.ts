import { setup, assign } from 'xstate';
import { CardInfo } from '../types';
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
    context: {
      cardState: CardInfo;
      cardList: CardInfo[];
    };
    events:
      | { type: 'cardState.updateCardNumber'; value: CardInfo['numbers'] }
      | {
          type: 'cardState.updateExpirationDate';
          value: CardInfo['expiration'];
        }
      | { type: 'cardState.updateOwner'; value: CardInfo['owner'] }
      | {
          type: 'cardState.updateSecurityCode';
          value: CardInfo['securityCode'];
        }
      | { type: 'cardState.updatePassword'; value: CardInfo['password'] }
      | { type: 'cardState.updateNickname'; value: CardInfo['nickname'] }
      | { type: 'cardState.updateCardBrand'; value: CardInfo['brand'] }
      | { type: 'cardState.resetCardState' }
      | { type: 'cardState.submit' }
      | { type: 'cardList.saveCardList'; value: CardInfo }
      | { type: 'cardList.deleteCard'; value: string }
      | { type: 'cardList.getCard'; value: string }
      | { type: 'cardList.saveToLocalStorage'; value: CardInfo[] }
      | { type: 'cardList.addNewCard' };
  },
  actions: {
    updateNickname: assign({
      cardState: ({ context, event }) => {
        if (event.type === 'cardState.updateNickname') {
          return { ...context.cardState, nickname: event.value };
        }

        return context.cardState;
      },
    }),
    resetCardState: assign({
      cardState: initialCardState,
    }),
    saveToLocalStorage: ({ context }) => {
      const { cardList } = context;
      console.log('🚀 ~ localstorage:', cardList);
      setLocalStorageItem({ key: CARD_STORAGE_KEY, item: cardList });
    },
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMCGAnCBlALqnYAdIC5zgOy0AEgjy2C6HeYCJjgMx0DEamu+RArgA4QcByAS2QBrAHaoAtmADaABgC6iUNwD2sQTkGqxykAA9EARiMBOAGyFzAJgCsADnMBmI9blyALB9MAaEAE9Ec3sPQjNTWwdXJ1trEwBfeL9WbDwCEgoaemYUgBlBWBxCWFQANzAAYQwIfML5JSQQNQ0tHT1DBAB2U1MrTyMPbsd7d18AxHsjQidra1Mje2tOr1jO60Tk6vZ0snJAEZ7AWznyQAwhwFQJli20rl4BYXEpWUU9Zs1tXUaOqMJJjycPWZiI0WfkCCFMf0IFic5nB7iMDmcGxAKW2RF2gEqu6gXTC1IowHBVTD1Z7qV5tD6IGbWQidJzufquOQWUweEHGOTWUJyOkRJzLDmmexIlFXDLkTHYmoFIqoCAQfhgADuhIgxMaL1a71AHTs1PsTgNRmWiyc9gsbIQizkYUcy3MZns+vstmFlw4YoleWlhAgYAANmACCq1SpSZr2ogALSOQj02ydOTme2RRxGC1J2yx2y-Dww5ym6Gutii3Y0SWowg8PhB6oAIXQqDEqqe6rDbwjCFiTkIsR6nNz5g8jmsFrWnWmHlcv06wwi5iLqXdpaxIvdVY4Kv4nEkACMwOgQ002+TtYhbPDIZ0jAbfgt451bOmZrHnT0zDOFhYFxXl+XReuCAAUX0bhBAbTUABEOEPDV2wpTs5Hsb5AXBEwPFiI0LVsaFkLkbp0KcQVCPWJJkTdHZMhXcjrmrMAAHlFTEfcYOPLUDDPU1pkQ7M5EiZZBRHcYEC8KZ40if5aRMQ1Om-EtKL-NcbgILAwGQTh0E0fwKlUX0WJaODT07VwaTtN97X7JwLT+SwZm5dC5iWRZTFkpd5NXdIALAAAFVBYFgRVVCJFtQ30k92M7axLH1NYFn1NwTEE0E7CmRNzyMcwZ1scx7yFUj3LRNzqOKTgd0kTQ9LJNiOm6XpzH6QZBWCUYLUWcccwsPDgmCXLSLEHS4D0fKSVCqqo2vLl3HjRNkwRC1I0zHoehnZ0ePPOwXIoqhaEYYbKo7IxE3HeFfkFFlXGzVkhOi6Z0sHQYXCTU0NoK-YjjOXbw3gwdLATa8-lag0HAtA7c0ISdTXhbCYka56PWoD6DPC+xx3tZ1IcTa9JkSiZkdjA1ePCUwZyevKiuXBGws+HowbiZ0DU6e1uUfK6lh7CwRNmWJ0OcxJ4iAA */
  id: 'cardState',
  initial: '카드 목록',
  context: {
    cardState: initialCardState,
    cardList: getLocalStorageItem({ key: CARD_STORAGE_KEY }) || [],
  },
  states: {
    '카드 등록 완료': {
      on: {
        'cardState.updateNickname': {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              nickname: event.value,
            }),
          }),
        },
        'cardList.saveCardList': {
          target: '카드 목록',
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
            'resetCardState',
          ],
        },
      },
    },

    '카드 별칭 수정': {
      target: '카드 목록',

      on: {
        'cardState.updateNickname': {
          target: '카드 목록',
          reenter: true,
          actions: 'updateNickname',
        },
      },
    },

    '카드 목록': {
      on: {
        'cardList.addNewCard': '카드 등록',

        'cardList.deleteCard': {
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

        'cardList.getCard': {
          actions: assign({
            cardState: ({ context, event }) => {
              console.log('get card');
              const { cardList } = context;
              const { value: id } = event;
              const targetCard = cardList.filter((card) => card.id === id);

              return targetCard[0];
            },
          }),
        },
      },
    },

    '카드 등록': {
      on: {
        'cardState.updateCardBrand': {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              brand: { ...event.value },
            }),
          }),
        },
        'cardState.updateCardNumber': {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              numbers: { ...event.value },
            }),
          }),
        },
        'cardState.updateExpirationDate': {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              expiration: { ...event.value },
            }),
          }),
        },
        'cardState.updateOwner': {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              owner: event.value,
            }),
          }),
        },

        'cardState.updateSecurityCode': {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              securityCode: event.value,
            }),
          }),
        },
        'cardState.updatePassword': {
          actions: assign({
            cardState: ({ context, event }) => ({
              ...context.cardState,
              password: { ...event.value },
            }),
          }),
        },
        'cardState.submit': '#cardState.카드 등록 완료',
      },
    },
  },
});
