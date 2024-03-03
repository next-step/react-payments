export type ActionType = {
  type: string;
  payload: {
    key: string;
    value: string | number | null;
  };
};
