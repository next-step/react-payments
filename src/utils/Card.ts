import { ColorType, CompanyType } from 'types';
type ColorTable = {
  [key: string]: ColorType;
};
type CompanyTable = {
  [key: string]: ColorType;
};

const Color: ColorTable = {
  Blue: 'blue',
  Green: 'green',
  Red: 'red',
  Pink: 'pink',
  Cyon: 'cyon',
  Purple: 'purple',
  Yellow: 'yellow',
  Orange: 'orange',
};
const CompanyColors: CompanyTable = {
  토스카드: Color.Blue,
  네이버카드: Color.Green,
  하나카드: Color.Red,
  국민카드: Color.Pink,
  신한카드: Color.Cyon,
  클린카드: Color.Purple,
  카카오카드: Color.Yellow,
  오렌지카드: Color.Orange,
};

const Companys: CompanyType[] = [
  '토스카드',
  '네이버카드',
  '하나카드',
  '국민카드',
  '신한카드',
  '클린카드',
  '카카오카드',
  '오렌지카드',
];
// 회사 이름명에 맞는 색깔 얻기
export const getCardCompnayColor = (name: CompanyType): ColorType => {
  return Companys.includes(name) ? CompanyColors[name] : '';
};
type CardNumberTable = {
  [key: string]: CompanyType;
};
const CARD_NUMBER: CardNumberTable = {
  '1': Companys[0],
  '2': Companys[1],
  '3': Companys[2],
  '4': Companys[3],
  '5': Companys[4],
  '6': Companys[5],
  '7': Companys[6],
  '8': Companys[7],
};
const CardNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// 카드 Number의 첫번째수에 맞는 회사 얻기
export const getCardNumberCompnay = (number: string): CompanyType => {
  return CardNumbers.includes(number) ? CARD_NUMBER[number] : '';
};
