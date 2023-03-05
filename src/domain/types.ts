export interface ICard {
  brand?: string;
  cardNumber?: string;
  cardHolder?: string;
  expiredDate?: string;
  type?: 'small' | 'big';
  color?: string;
}

export interface ICardDTO extends ICard {
  index?: number;
  cardPassword?: number;
  cardSecurityCode?: number;
  nickname?: string;
}
