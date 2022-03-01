import { SERIAL_NUMS, EXPIRED_DATE } from 'controlled/pages/CardAddPage/constants'

export type Card = {
  id: string
  type: string
  serialNums: typeof SERIAL_NUMS
  ownerName: string
  expiredDate: typeof EXPIRED_DATE
  nickName: string
}
