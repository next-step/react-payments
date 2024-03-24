import { cardAdditionalInfo, formInitialValues } from './payments.const'

export type RegistrationInitialValues = typeof formInitialValues

export type CardAdditionalInitialValues = typeof cardAdditionalInfo

export type CardItem = RegistrationInitialValues &
  CardAdditionalInitialValues & { time: number; id: string }

export type PaymentMachineContext = {
  registration: RegistrationInitialValues
  cardAdditionalInfo: CardAdditionalInitialValues
  cardEditingInfo: CardItem
}
