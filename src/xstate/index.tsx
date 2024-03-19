import { assign, createActor, createMachine, setup } from 'xstate'
import { Step } from '../constant/step'

interface StepContext {
  step: Step | null
}
export type StepEvent = { type: 'ADD' } | { type: 'LIST' } | { type: 'COMPLETE' }

export const stepMachine = createMachine({
  id: 'step',
  initial: 'add',
  context: {
    step: 'add',
  },
  states: {
    add: {
      on: {
        complete: {
          target: 'complete',
          actions: assign({
            step: ({ event }) => event.type,
          }),
        },
        list: {
          target: 'list',
        },
      },
    },
    list: {
      on: {
        add: {
          target: 'add',
        },
        complete: {
          target: 'complete',
        },
      },
    },
    complete: {
      on: {
        list: {
          target: 'list',
        },
      },
    },
  },
})

export const stepActor = createActor(stepMachine).start()
