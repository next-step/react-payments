import { CardInfoType } from '../type/card';

export const initCardList: CardInfoType[] = [
  {
    digits: { digit1: 1111, digit2: 2222, digit3: 1111, digit4: 2222 },
    expire: '04/21',
    name: 'SEYOUNG',
    cvc: '123',
    passwords: { password1: '1', password2: '2' },
    company: '하나카드',
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
  nickname: '',
  createdDate: 0,
};
