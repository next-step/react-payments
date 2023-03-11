import { CardInfoType } from '../type/card';
import { COLOR } from '../constant/color';
import { CardCompanyType } from '../components/modal/ModalSelectCompany';
import { COMPANY } from '../constant/company';

export const initCardList: CardInfoType[] = [
  {
    digits: { digit1: 1111, digit2: 2222, digit3: 1111, digit4: 2222 },
    expire: '04/21',
    name: 'SEYOUNG',
    cvc: '123',
    passwords: { password1: '1', password2: '2' },
    company: '레드카드',
    color: COLOR.RED,
    nickname: '생활비 카드',
    createdDate: 9999999999999,
  },
];

export const initCardInfo: CardInfoType = {
  digits: { digit1: '', digit2: '', digit3: '', digit4: '' },
  expire: '',
  name: '',
  cvc: '',
  passwords: { password1: '', password2: '' },
  company: '',
  color: '',
  nickname: '',
  createdDate: 0,
};

// company에 관한 상수값이 있으면 관리가 쉬울 것 같다.

export const cardCompanyList: CardCompanyType[] = [
  {
    color: COLOR.RED,
    company: COMPANY.RED_CARD,
  },
  {
    color: COLOR.BLUE,
    company: COMPANY.BLUE_CARD,
  },
  {
    color: COLOR.GREEN,
    company: COMPANY.GREEN_CARD,
  },
  {
    color: COLOR.PINK,
    company: COMPANY.PINK_CARD,
  },
  {
    color: COLOR.ORANGE,
    company: COMPANY.ORANGE_CARD,
  },
  {
    color: COLOR.GREY,
    company: COMPANY.GREY_CARD,
  },
  {
    color: COLOR.YELLOW,
    company: COMPANY.YELLOW_CARD,
  },
  {
    color: COLOR.AQUA,
    company: COMPANY.AQUA_CARD,
  },
];
