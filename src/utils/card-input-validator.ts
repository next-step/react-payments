import type { CardInputState, CardInputErrorState } from '@/types/card'

class CardInputValidator {
  validateCardType(cardType: CardInputState['cardType']) {
    return cardType !== undefined ? undefined : '카드사를 선택해주세요'
  }

  vadlidateCardCode(cardCode: CardInputState['cardCode'], codeLength = 16) {
    return cardCode.length < codeLength ? `카드 번호 ${codeLength}자리를 입력해주세요` : undefined
  }

  validateCardExpDate(cardExpDate: CardInputState['cardExpDate'], expDateLength = 5) {
    return cardExpDate.length < expDateLength
      ? '카드 만료일을 MM/YY 형식으로 입력해주세요'
      : undefined
  }

  validateCardName(cardName: CardInputState['cardName'], nameMaxLength = 30) {
    return cardName.length > nameMaxLength
      ? `카드 소유자 이름은 최대 ${nameMaxLength}자 입니다`
      : undefined
  }

  validateCardCVC(cardCVC: CardInputState['cardCVC'], cvcLength = 3) {
    return cardCVC.length < cvcLength ? `보안 코드는 ${cvcLength}자리 입니다` : undefined
  }

  validateCardPin(cardPin: CardInputState['cardPin'], pinLength = 2) {
    return cardPin.length < pinLength ? `카드 비밀번호는 ${pinLength}자리 입니다` : undefined
  }

  validate(cardInputValue: CardInputState): CardInputErrorState {
    return {
      cardType: this.validateCardType(cardInputValue['cardType']),
      cardCode: this.vadlidateCardCode(cardInputValue['cardCode']),
      cardExpDate: this.validateCardExpDate(cardInputValue['cardExpDate']),
      cardName: this.validateCardName(cardInputValue['cardName']),
      cardCVC: this.validateCardCVC(cardInputValue['cardCVC']),
      cardPin: this.validateCardPin(cardInputValue['cardPin']),
    }
  }

  isValid(errorState: CardInputErrorState) {
    return Object.values(errorState).every(errorValue => errorValue === undefined)
  }
}

export const cardInputValidator = new CardInputValidator()
