/* eslint-disable import/prefer-default-export */
export const JsonToArr = <T>(Json: string | null) =>
  JSON.parse(Json as string) as T;
