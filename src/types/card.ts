export interface CardInfo {
  id: string;
  brand: Brand;
  numbers: { first: string; second: string; third: string; fourth: string };
  owner: string;
  expiration: { month: string; year: string };
  password: { first: string; second: string };
  securityCode: string;
  nickname: string;
  createdAt: string;
}

export interface Brand {
  label: string;
  color: string;
}
