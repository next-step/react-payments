import { setup, assign } from 'xstate';
import type { FormItemKeys, FormItemValues, FormItems } from '@/types/form';

const formMachine = setup({
  types: {
    context: {} as {
      totalFormData: Map<FormItemKeys, FormItemValues<FormItems>>;
    },
    events: {} as {
      type: 'NEXT_STEP';
      data?: Map<Partial<FormItemKeys>, FormItemValues<FormItems>>;
    },
  },
  actions: {
    UPDATE: assign({
      totalFormData: ({ context, event }) => {
        if (!event.data) {
          return context.totalFormData;
        }
        const newFormData = new Map([...context.totalFormData, ...event.data]);
        return newFormData;
      },
    }),
  },
}).createMachine({
  id: 'form',
  initial: 'cardInfo',
  context: {
    totalFormData: new Map(),
  },
  states: {
    cardInfo: {
      on: {
        NEXT_STEP: {
          target: 'cardName',
          actions: 'UPDATE',
        },
      },
      description: '카드 정보 입력',
    },
    cardName: {
      on: {
        NEXT_STEP: {
          target: 'finish',
          actions: 'UPDATE',
        },
      },
      description: '카드 이름 입력',
    },
    finish: {
      type: 'final',
      description: '카드 등록 완료',
    },
  },
});

export default formMachine;
