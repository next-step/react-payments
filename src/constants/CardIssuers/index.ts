export interface CardIssuer {
  name: string;
  color: string;
  BIN: string;
}

export type issuers =
  | 'poco'
  | 'jun'
  | 'hyunsuk'
  | 'yoonho'
  | 'hwanoh'
  | 'taeun'
  | 'junil'
  | 'eungyu';

type CardIssuers = Record<issuers, CardIssuer>;

export const cardIssuers: CardIssuers = {
  poco: {
    name: '포코 카드',
    color: '#E24141',
    BIN: '11111111',
  },
  jun: {
    name: '준 카드',
    color: '#547CE4',
    BIN: '22222222',
  },
  hyunsuk: {
    name: '현석 카드',
    color: '#73BC6D',
    BIN: '33333333',
  },
  yoonho: {
    name: '윤호 카드',
    color: '#DE59B9',
    BIN: '44444444',
  },
  hwanoh: {
    name: '환오 카드',
    color: '#04C09E',
    BIN: '55555555',
  },
  taeun: {
    name: '태은 카드',
    color: '#E76E9A',
    BIN: '66666666',
  },
  junil: {
    name: '준일 카드',
    color: '#F37D3B',
    BIN: '77777777',
  },
  eungyu: {
    name: '은규 카드',
    color: '#FBCD58',
    BIN: '88888888',
  },
};
