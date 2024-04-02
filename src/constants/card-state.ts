import { CardInputState, CardInputErrorState } from '@/types/card'

export const INITIAL_CARD_INPUT_STATE: CardInputState = {
  cardCode: '',
  cardExpDate: '',
  cardName: '',
  cardCVC: '',
  cardPin: '',
  cardNickName: '',
  cardType: undefined,
}

export const INITIAL_CARD_INPUT_ERROR_STATE: CardInputErrorState = {
  cardCode: undefined,
  cardExpDate: undefined,
  cardName: undefined,
  cardCVC: undefined,
  cardPin: undefined,
  cardType: undefined,
}
