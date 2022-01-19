import { ComponentStory } from '@storybook/react'
import { getCustomValidity } from '@/common/formServices'
import { BasicInput, PasswordInput } from '@/components/cardForm/input'
import { createRef, ReactChild, SyntheticEvent } from 'react'
import { LIMITS } from '@/common/constants'

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

const CardNumberTemplate: ComponentStory<typeof BasicInput> = args => (
  <Form>
    <BasicInput {...args} />
  </Form>
)
export const InputCardNumber = CardNumberTemplate.bind({})
InputCardNumber.args = {
  name: 'cardNumber1',
  pattern: String.raw`^\d{4}$`,
  minLength: LIMITS.CARD_NUMBER_SIZE,
  maxLength: LIMITS.CARD_NUMBER_SIZE,
  testId: 'input-card-number',
}

const CardNumberAnonymousTemplate: ComponentStory<typeof PasswordInput> = args => {
  const Component = InputWithKeypad('cardNumber3', PasswordInput)
  return <Component {...args} />
}
export const InputCardNumberAnonymous = CardNumberAnonymousTemplate.bind({})
InputCardNumberAnonymous.args = {
  name: 'cardNumber3',
  pattern: '^[0-9]{4}$',
  minLength: LIMITS.CARD_NUMBER_SIZE,
  maxLength: LIMITS.CARD_NUMBER_SIZE,
  testId: 'input-card-number',
}

const MonthTemplate: ComponentStory<typeof BasicInput> = args => (
  <Form>
    <BasicInput {...args} />
  </Form>
)
export const InputMonth = MonthTemplate.bind({})
InputMonth.args = {
  name: 'expiredMonth',
  pattern: '^(0[1-9]|1[012])$',
  minLength: LIMITS.MONTH_SIZE,
  maxLength: LIMITS.MONTH_SIZE,
  testId: 'input-month',
  placeholder: 'MM',
}

const YearTemplate: ComponentStory<typeof BasicInput> = args => (
  <Form>
    <BasicInput {...args} />
  </Form>
)
export const InputYear = YearTemplate.bind({})
InputYear.args = {
  name: 'expiredYear',
  pattern: '^(2[2-9]|[3-9][0-9])$',
  minLength: LIMITS.YEAR_SIZE,
  maxLength: LIMITS.YEAR_SIZE,
  testId: 'input-year',
  placeholder: 'YY',
}

const CvcTemplate: ComponentStory<typeof PasswordInput> = args => {
  const Component = InputWithKeypad('cvc', PasswordInput)
  return <Component {...args} />
}
export const InputCvc = CvcTemplate.bind({})
InputCvc.args = {
  name: 'cvc',
  pattern: '^[0-9]{3}$',
  minLength: LIMITS.CVC_SIZE,
  maxLength: LIMITS.CVC_SIZE,
  testId: 'input-cvc',
}

const PasswordTemplate: ComponentStory<typeof PasswordInput> = args => {
  const Component = InputWithKeypad('pw1', PasswordInput)
  return <Component {...args} />
}
export const InputPassword = PasswordTemplate.bind({})
InputPassword.args = {
  name: 'password',
  pattern: '^[0-9]{1}$',
  minLength: LIMITS.PASSWORD_SIZE,
  maxLength: LIMITS.PASSWORD_SIZE,
  testId: 'input-password',
}

const UserNameTemplate: ComponentStory<typeof PasswordInput> = args => (
  <Form>
    <PasswordInput {...args} />
  </Form>
)
export const InputUserName = UserNameTemplate.bind({})
InputUserName.args = {
  name: 'userName',
  maxLength: LIMITS.MAX_NAME_SIZE,
  testId: 'input-user-name',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
}
