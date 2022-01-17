import { ComponentStory } from '@storybook/react'
import { getCustomValidity } from '@/common/formServices'
import {
  CardNumberInput,
  CardNumberAnonymousInput,
  MonthInput,
  YearInput,
  CvcInput,
  PasswordInput,
  UserNameInput,
} from '@/components/cardForm/input'
import { ReactChild, SyntheticEvent } from 'react'

export default {
  title: '1. Components/CardForm',
}

const Form = ({ children }: { children: ReactChild }) => {
  const handleChange = (e: SyntheticEvent) => {
    const $target = e.target
    if (!($target instanceof HTMLInputElement)) return
    const validityResult = getCustomValidity($target)
    $target.setCustomValidity(validityResult)
    $target.reportValidity()
  }
  return (
    <form data-testid="form" onChange={handleChange}>
      {children}
    </form>
  )
}

const CardNumberTemplate: ComponentStory<typeof CardNumberInput> = args => (
  <Form>
    <CardNumberInput {...args} name="cardNumber1" />
  </Form>
)
export const InputCardNumber = CardNumberTemplate.bind({})

const CardNumberAnonymousTemplate: ComponentStory<typeof CardNumberAnonymousInput> = args => (
  <Form>
    <CardNumberAnonymousInput {...args} name="cardNumber3" />
  </Form>
)
export const InputCardNumberAnonymous = CardNumberAnonymousTemplate.bind({})

const MonthTemplate: ComponentStory<typeof MonthInput> = args => (
  <Form>
    <MonthInput {...args} />
  </Form>
)
export const InputMonth = MonthTemplate.bind({})

const YearTemplate: ComponentStory<typeof YearInput> = args => (
  <Form>
    <YearInput {...args} />
  </Form>
)
export const InputYear = YearTemplate.bind({})

const CvcTemplate: ComponentStory<typeof CvcInput> = args => (
  <Form>
    <CvcInput {...args} />
  </Form>
)
export const InputCvc = CvcTemplate.bind({})

const PasswordTemplate: ComponentStory<typeof PasswordInput> = args => (
  <Form>
    <PasswordInput {...args} name="pw1" />
  </Form>
)
export const InputPassword = PasswordTemplate.bind({})

const UserNameTemplate: ComponentStory<typeof UserNameInput> = args => (
  <Form>
    <UserNameInput {...args} />
  </Form>
)
export const InputUserName = UserNameTemplate.bind({})
