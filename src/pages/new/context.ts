import { createContext } from 'react';
import type { Dispatch } from 'react';
import { setup } from 'xstate';

export const formMachine = setup({
  types: {
    context: {} as {
      totalFormData: Map<string, any>;
    },
    events: {
      type: 'NEXT_STEP',
    },
  },
  actions: {},
}).createMachine({
  id: 'form',
  initial: 'cardInfo',
  context: {
    totalFormData: new Map(),
  },
  states: {
    cardInfo: {
      on: { NEXT_STEP: 'cardName' },
    },
    cardName: {},
  },
});

type FormContext = {
  totalFormData: Map<string, any>;
  setTotalFormData: Dispatch<React.SetStateAction<Map<string, unknown>>>;
};

const FormContext = createContext<FormContext>({
  totalFormData: new Map(),
  setTotalFormData: () => {},
});

export default FormContext;
