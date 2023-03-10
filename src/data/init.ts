import { CardInfoType } from '../type/card';
import { COLOR } from '../constant/color';
import { CardCompanyType } from '../components/modal/ModalSelectCompany';

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

export const cardCompanyList: CardCompanyType[] = [
  {
    color: COLOR.RED,
    company: '레드카드',
  },
  {
    color: COLOR.BLUE,
    company: '블루카드',
  },
  {
    color: COLOR.GREEN,
    company: '그린카드',
  },
  {
    color: COLOR.PINK,
    company: '핑크카드',
  },
  {
    color: COLOR.ORANGE,
    company: '오렌지카드',
  },
  {
    color: COLOR.GREY,
    company: '그레이카드',
  },
  {
    color: COLOR.YELLOW,
    company: '옐로우카드',
  },
  {
    color: COLOR.GREEN_1,
    company: '형광카드',
  },
];
