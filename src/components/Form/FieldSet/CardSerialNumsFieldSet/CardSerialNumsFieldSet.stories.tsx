import { ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import { SERIAL_NUMS } from 'pages/CardAddPage/constants'
import { limitRangeOfSerialNums } from 'pages/CardAddPage/helpers'
import CardSerialNumsFieldSet from './CardSerialNumsFieldSet'

export default {
  title: 'Components/Form/FieldSet/CardSerialNumsFieldSet',
  component: CardSerialNumsFieldSet,
} as ComponentMeta<typeof CardSerialNumsFieldSet>

export function Default() {
  const [serialNums, setSerialNums] = useState(SERIAL_NUMS)
  const hanleSerialNums = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = limitRangeOfSerialNums(name, value)
    setSerialNums({ ...serialNums, [name]: filteredValue })
  }
  return <CardSerialNumsFieldSet serialNums={serialNums} onChange={hanleSerialNums} />
}
