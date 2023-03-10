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
const Company_Color: CompanyTable = {
  토스카드: Color.Blue,
  네이버: Color.Green,
  하나카드: Color.Red,
  국민카드: Color.Pink,
  신한카드: Color.Cyon,
  클린카드: Color.Purple,
  카카오카드: Color.Yellow,
  오렌지카드: Color.Orange,
};
const Companys = ['토스카드', '네이버', '하나카드', '국민카드', '신한카드', '클린카드', '카카오카드', '오렌지카드'];
// 카드에 맞는 컬러 추출
export const getCardColor = (name: CompanyType): ColorType => {
  return Companys.includes(name) ? Company_Color[name] : '';
};
