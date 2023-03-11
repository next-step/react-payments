import { CardInfoType } from '../type/card';
import { COLOR } from '../constant/color';
import { CardCompanyType } from '../components/modal/ModalSelectCompany';
import { COMPANY_DATA } from '../constant/company';

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
    company: COMPANY_DATA.RED_CARD.company,
    color: COMPANY_DATA.RED_CARD.color,
  },
  {
    company: COMPANY_DATA.BLUE_CARD.company,
    color: COMPANY_DATA.BLUE_CARD.color,
  },
  {
    company: COMPANY_DATA.GREEN_CARD.company,
    color: COMPANY_DATA.GREEN_CARD.color,
  },
  {
    company: COMPANY_DATA.PINK_CARD.company,
    color: COMPANY_DATA.PINK_CARD.color,
  },
  {
    company: COMPANY_DATA.ORANGE_CARD.company,
    color: COMPANY_DATA.ORANGE_CARD.color,
  },
  {
    company: COMPANY_DATA.GREY_CARD.company,
    color: COMPANY_DATA.GREY_CARD.color,
  },
  {
    company: COMPANY_DATA.YELLOW_CARD.company,
    color: COMPANY_DATA.YELLOW_CARD.color,
  },
  {
    company: COMPANY_DATA.AQUA_CARD.company,
    color: COMPANY_DATA.AQUA_CARD.color,
  },
];
