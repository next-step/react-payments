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
import { createRef, ReactChild, SyntheticEvent } from 'react'

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
      <div className="input-box">{children}</div>
    </form>
  )
}

const InputWithKeypad = (name: string, Component: any) => (args: any) => {
  const ref = createRef<HTMLInputElement>()
  return (
    <div style={{ marginTop: '150px' }}>
      <Form>
        <Component name={name} elRef={ref} {...args} />
      </Form>
    </div>
  )
}

const CardNumberTemplate: ComponentStory<typeof CardNumberInput> = args => (
  <Form>
    <CardNumberInput {...args} name="cardNumber1" />
  </Form>
)
export const InputCardNumber = CardNumberTemplate.bind({})

const CardNumberAnonymousTemplate: ComponentStory<typeof CardNumberAnonymousInput> = args => {
  const Component = InputWithKeypad('cardNumber3', CardNumberAnonymousInput)
  return <Component {...args} />
}
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

const CvcTemplate: ComponentStory<typeof CvcInput> = args => {
  const Component = InputWithKeypad('cvc', CvcInput)
  return <Component {...args} />
}
export const InputCvc = CvcTemplate.bind({})

const PasswordTemplate: ComponentStory<typeof PasswordInput> = args => {
  const Component = InputWithKeypad('pw1', PasswordInput)
  return <Component {...args} />
}
export const InputPassword = PasswordTemplate.bind({})

const UserNameTemplate: ComponentStory<typeof UserNameInput> = args => (
  <Form>
    <UserNameInput {...args} />
  </Form>
)
export const InputUserName = UserNameTemplate.bind({})
