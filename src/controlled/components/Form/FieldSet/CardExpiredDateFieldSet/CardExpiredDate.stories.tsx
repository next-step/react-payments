import { ComponentMeta } from '@storybook/react'
import { EXPIRED_DATE } from 'controlled/pages/CardAddPage/constants'
import { limitRangeOfMonthAndYear } from 'controlled/pages/CardAddPage/helpers'
import { useState } from 'react'
import CardExpiredDateFieldSet from './CardExpiredDateFieldSet'

export default {
  title: 'Components/Form/FieldSet/CardExpiredDateFieldSet',
  component: CardExpiredDateFieldSet,
} as ComponentMeta<typeof CardExpiredDateFieldSet>

export function Default() {
  const [expiredDate, setExpiredDate] = useState<typeof EXPIRED_DATE>(EXPIRED_DATE)
  const handleExpiredDate = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = limitRangeOfMonthAndYear(name, value)
    setExpiredDate({ ...expiredDate, [name]: filteredValue })
  }
  return <CardExpiredDateFieldSet expiredDate={expiredDate} onChange={handleExpiredDate} />
}
