import Card from '@components/card/index'
import { ComponentStory } from '@storybook/react'
import '/public/styles/index.css'
import { getCustomValidity } from '@common/formServices'
import {
  CardNumberInput,
  CardNumberAnonymousInput,
  MonthInput,
  YearInput,
  CvcInput,
  PasswordInput,
  UserNameInput,
} from '@components/cardForm/input'
import SelectModal from '@components/modal/selectModal'
import { ReactChild, SyntheticEvent } from 'react'

export default {
  title: '1. Components',
}

const CardTemplate: ComponentStory<typeof Card> = args => <Card {...args} />

export const CardNew = CardTemplate.bind({})
CardNew.args = {
  type: 'new',
  cardData: null,
  setRoute: () => {},
}

export const CardEmpty = CardTemplate.bind({})
CardEmpty.args = {
  type: 'small',
  cardData: null,
}

const cardData = {
  cardName: '그린카드',
  cardNumber: '1234 - 1234 - **** - ****',
  expired: '10 / 24',
  userName: 'JAENAM',
  alias: '법카',
}

export const CardBig = CardTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardBig.args = {
  type: 'big',
  cardData,
}

export const CardSmall = CardTemplate.bind({})
CardSmall.args = {
  type: 'small',
  cardData,
}

const Form = ({ children }: { children: ReactChild }) => {
  const handleChange = (e: SyntheticEvent) => {
    const $target = e.target
    if (!($target instanceof HTMLInputElement)) return
    const validityResult = getCustomValidity($target)
    $target.setCustomValidity(validityResult)
    $target.reportValidity()
  }
  return <form onChange={handleChange}>{children}</form>
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

const ToggleModal = ({ show }: { show: boolean }) => {
  if (show) return <SelectModal selectCard={() => {}} closeModal={() => {}} />
  return null
}
const ModalTemplate: ComponentStory<typeof ToggleModal> = args => {
  const { show } = args
  return (
    <>
      <ToggleModal show={show} />
      <div id="modalRoot"></div>
    </>
  )
}
export const ModalSelect = ModalTemplate.bind({})
ModalSelect.args = {
  show: true,
}
