export interface CardBoxType {
  cardCompany?: string;
  cardNumber?: string;
  cardHolder?: string;
  expiredDate?: string;
  type?: 'small' | 'big';
  color?: string;
  nickname?: string;
}

export type CardCompanyType = { cardCompany: string, color: string };