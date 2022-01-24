export interface CardNumber {
  first: string;
  second: string;
  third: string;
  forth: string;
}

export const initialExpiredDateValue = {
  month: '',
  year: '',
};

export const initialCardNumValue = {
  first: '',
  second: '',
  third: '',
  forth: '',
};

export const initialCardPasswordValue = {
  first: '',
  second: '',
};

export interface CardProps {
  cardNum: CardNumber;
  expiredDate: { month: string; year: string };
  userName: string;
  cardNickname: string;
  CVC: string;
  cardPassword: { first: string; second: string };
  cardCompany?: string;
  createdAt?: Date;
}
