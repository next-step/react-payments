import { ComponentMeta } from '@storybook/react'
import { PASSWORD } from 'controlled/pages/CardAddPage/constants'
import { useState } from 'react'
import CardPasswordFieldSet from './CardPasswordFieldSet'

export default {
  title: 'Components/Form/FieldSet/CardPasswordFieldSet',
  component: CardPasswordFieldSet,
} as ComponentMeta<typeof CardPasswordFieldSet>

export function Default() {
  const [password, setPassword] = useState<typeof PASSWORD>(PASSWORD)
  const handlePassword = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [name]: value })
  }
  return <CardPasswordFieldSet password={password} onChange={handlePassword} />
}
