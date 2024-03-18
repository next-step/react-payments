import { assign, setup } from 'xstate';

type FunnelContext = {
  currentIndex: number;
  lastIndex: number;
};

type FunnelEvent =
  | { type: 'initLastIndex'; value: FunnelContext }
  | { type: 'goToNext'; value: Pick<FunnelContext, 'lastIndex'> }
  | { type: 'goToPrev'; value: Pick<FunnelContext, 'lastIndex'> }
  | { type: 'goToIndex'; value: FunnelContext };

const INITIAL_FUNNEL_CONTEXT: FunnelContext = {
  currentIndex: 0,
  lastIndex: 0,
};

export const funnelMachine = setup({
  types: {
    context: {} as FunnelContext,
    events: {} as FunnelEvent,
  },
}).createMachine({
  id: 'funnel',
  context: INITIAL_FUNNEL_CONTEXT,
  initial: 'funnelIndex',
  states: {
    funnelIndex: {
      on: {
        initLastIndex: {
          actions: assign(({ event }) =>
            event.type === 'initLastIndex'
              ? {
                  lastIndex: event.value.lastIndex,
                  currentIndex: event.value.currentIndex,
                }
              : {},
          ),
        },
        goToNext: {
          actions: assign(({ context }) => ({
            currentIndex: context.currentIndex >= context.lastIndex ? 0 : context.currentIndex + 1,
          })),
        },
        goToPrev: {
          actions: assign(({ context }) => ({
            currentIndex: context.currentIndex <= 0 ? context.lastIndex : context.currentIndex - 1,
          })),
        },
        goToIndex: {
          actions: assign(({ event }) => ({
            currentIndex: event.value.currentIndex,
          })),
        },
      },
    },
  },
});
