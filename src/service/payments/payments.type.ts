import { cardAdditionalInfo, formInitialValues } from './payments.const'

export type RegistrationInitialValues = typeof formInitialValues

export type CardAdditionalInitialValues = typeof cardAdditionalInfo

export type PaymentMachineContext = {
  registration: RegistrationInitialValues
  cardAdditionalInfo: CardAdditionalInitialValues
}
