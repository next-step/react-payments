import { setup, assign } from 'xstate';
import type { FormItemKeys } from '@/types/form';

const formMachine = setup({
  types: {
    context: {} as { data: Partial<Record<FormItemKeys, string>> },
    events: {} as {
      type: 'NEXT' | 'UPDATE' | 'isValid';

      data?: Partial<Record<FormItemKeys, string>>;
    },
  },
  actions: {
    UPDATE: assign({
      data: ({ event, context }) => ({
        ...context.data,
        ...event.data,
      }),
    }),
  },
  guards: {
    isValid: (
      {
        context,
      }: {
        context: { data: Partial<Record<FormItemKeys, string>> };
      },
      params: {
        targetName: FormItemKeys;
        maxLength: number;
      }
    ) => {
      const { data } = context;
      if (!data[params.targetName]) return false;
      return data[params.targetName]!.length >= params.maxLength;
    },
  },
}).createMachine({
  id: 'form',
  initial: 'cardNumber1',
  context: {
    data: {},
  },
  on: {
    UPDATE: {
      actions: 'UPDATE',
    },
  },
  states: {
    cardNumber1: {
      always: {
        guard: {
          type: 'isValid',
          params: { maxLength: 4, targetName: 'cardNumber1' },
        },
        target: 'cardNumber2',
      },
      on: {
        UPDATE: {
          actions: 'UPDATE',
        },
      },
    },
    cardNumber2: {
      always: {
        guard: {
          type: 'isValid',
          params: { maxLength: 4, targetName: 'cardNumber2' },
        },
        target: 'cardNumber3',
      },
      on: {
        UPDATE: {
          actions: 'UPDATE',
        },
      },
    },
    cardNumber3: {
      always: {
        guard: {
          type: 'isValid',
          params: { maxLength: 4, targetName: 'cardNumber3' },
        },
        target: 'cardNumber4',
      },
      on: {
        UPDATE: {
          actions: 'UPDATE',
        },
      },
    },
    cardNumber4: {
      always: {
        guard: {
          type: 'isValid',
          params: { maxLength: 4, targetName: 'cardNumber4' },
        },
        target: 'expireDateMonth',
      },
      on: {
        UPDATE: {
          actions: 'UPDATE',
        },
      },
    },
    expireDateMonth: {
      always: {
        guard: {
          type: 'isValid',
          params: { maxLength: 2, targetName: 'expireDateMonth' },
        },
        target: 'expireDateYear',
      },
      on: {
        UPDATE: {
          actions: 'UPDATE',
        },
      },
    },
    expireDateYear: {
      always: {
        guard: {
          type: 'isValid',
          params: { maxLength: 2, targetName: 'expireDateYear' },
        },
        target: 'cardOwner',
      },
      on: {
        UPDATE: {
          actions: 'UPDATE',
        },
      },
    },
    cardOwner: {
      always: {},
      on: {
        UPDATE: {
          actions: 'UPDATE',
        },
        NEXT: {
          target: 'cvc',
        },
      },
    },
    cvc: {
      always: {
        guard: {
          type: 'isValid',
          params: { maxLength: 3, targetName: 'cvc' },
        },
        target: 'password1',
      },
      on: {
        UPDATE: {
          actions: 'UPDATE',
        },
      },
    },
    password1: {
      always: {
        guard: {
          type: 'isValid',
          params: { maxLength: 1, targetName: 'password1' },
        },
        target: 'password2',
      },
      on: {
        UPDATE: {
          actions: 'UPDATE',
        },
      },
    },
    password2: {
      always: {
        guard: {
          type: 'isValid',
          params: { maxLength: 1, targetName: 'password2' },
        },
        target: 'finish',
      },
      on: {
        UPDATE: {
          actions: 'UPDATE',
        },
      },
    },
    finish: {
      type: 'final',
    },
  },
});
export default formMachine;
