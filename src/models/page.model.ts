export interface CardNumber {
  first: string;
  second: string;
  third: string;
  forth: string;
}

export interface CardInfo {
  expiredDate: { month: string; year: string };
  cardNum: CardNumber;
  userName: string;
}

export interface CardInfoWithCardCompany extends CardInfo {
  cardCompany: string;
  updateCardCompany?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CardAddPageProps extends CardInfoWithCardCompany {
  CVC: string;
  cardPassword: {
    first: string;
    second: string;
    third: string;
    forth: string;
  };
  updateCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateExpiredDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateCardPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CardAddCompletedPageProps extends CardInfoWithCardCompany {
  cardNickname: string;
  updateCardNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
