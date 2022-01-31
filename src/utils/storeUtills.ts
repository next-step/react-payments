interface BaseAction<ActionType extends string, Payload = void> {
  type: ActionType;
  payload: Payload;
}

type ActionCreator<ActionType extends string, Payload = void> = (paylaod: Payload) => BaseAction<ActionType, Payload>;

type ActionTypeMap<ActionCreatorMap extends { [K in string]: ActionCreator<any, any> }> = {
  [K in keyof ActionCreatorMap]: ReturnType<ActionCreatorMap[K]>;
};

type SelectFunction<State, Return = any> = (state: State) => Return;

const makeActionCreator =
  <ActionType extends string>(actionType: ActionType) =>
  <Payload = void>(): ActionCreator<ActionType, Payload> =>
  (payload) => ({ type: actionType, payload });

export { makeActionCreator };
export type { BaseAction, ActionCreator, ActionTypeMap, SelectFunction };
