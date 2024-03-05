export interface CardInfo {
  brand: string;
  numbers: { first: string; second: string; third: string; fourth: string };
  owner: string;
  expiration: { month: string; year: string };
  password: { first: string; second: string };
  securityCode: string;
  nickname: string;
}
