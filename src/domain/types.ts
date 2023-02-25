export interface ICardBox {
  brand?: string;
  cardNumber?: string;
  cardHolder?: string;
  expiredDate?: string;
  type?: 'small' | 'big';
  color?: string;
}

export interface ICardBoxDTO extends ICardBox {
  index?: number;
  cardPassword?: number;
  cardSecurityCode?: number;
  nickname?: string;
}