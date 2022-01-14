export const enum MAX_LENGTH {
  CARD_NUMBER = 4,
  EXPIRED_DATE = 2,
  USER_NAME = 30,
  CVC = 3,
  CARD_PASSWORD = 1,
}

export const enum ERROR_MESSAGE {
  CARD_NUMBER = '카드 번호 16자리를 입력해주세요',
  EXPIRED_DATES = '형식에 맞게 입력해주세요(월: 1~12월, 년: 올해로부터 최대 5년)',
  CVC = '보안코드를 입력해주세요',
  CARD_PASSWORD = '카드 비밀번호 앞 두자리를 입력해주세요',
}
