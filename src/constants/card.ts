export const CARD = {
  NUMBER: {
    TYPE: 'cardNumber',
    LENGTH: 4,
    MASKING_TEXT: '*',
  },

  EXPIRATION: {
    TYPE: 'cardExpiration',
    PLACEHOLDER: {
      MONTH: 'MM',
      YEAR: 'YY',
    },
    LENGTH: 2,
  },

  SECRET_CODE: {
    TYPE: 'cardSecretCode',
    LENGTH: 3,
  },

  PASSWORD: {
    TYPE: 'cardPassword',
    LENGTH: 1,
  },

  OWNER_NAME: {
    TYPE: 'cardOwnerName',
    LENGTH: 30,
    PLACEHOLDER: 'NAME',
  },

  ALIAS: {
    TYPE: 'cardAlias',
    LENGTH: 10,
    PLACEHOLDER: '카드 별칭 (선택)',
  },

  COMPANY: {
    TYPE: 'cardCompany',
    LIST: [
      { name: '은규', color: '#FBCD58' },
      { name: '포코', color: '#E24141' },
      { name: '준', color: '#547CE4' },
      { name: '현석', color: '#73BC6D' },
      { name: '윤호', color: '#DE5AB9' },
      { name: '환오', color: '#75DCCA' },
      { name: '태은', color: '#E76E9A' },
      { name: '준일', color: '#F37D3B' },
    ],
  },
};
