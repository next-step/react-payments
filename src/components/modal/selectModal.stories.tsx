import { ComponentStory } from '@storybook/react'
import '/public/styles/index.css'
import SelectModal from '@/components/modal/selectModal'

export default {
  title: '1. Components',
}

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
