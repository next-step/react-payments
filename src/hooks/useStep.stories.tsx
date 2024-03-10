import type { Meta, StoryObj } from '@storybook/react'
import { useStep } from '@/hooks/useStep'

const meta: Meta = {
  title: 'hooks/useStep'
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => {
    const [Stepper, setStep] = useStep(['step1', 'step2', 'step3'] as const)

    return (
      <div>
        <button onClick={() => setStep('step1')}>step1</button>
        <button onClick={() => setStep('step2')}>step2</button>
        <button onClick={() => setStep('step3')}>step3</button>
        <Stepper>
          <Stepper.Step name="step1">
            <div>Step1</div>
          </Stepper.Step>
          <Stepper.Step name="step2">
            <div>Step2</div>
          </Stepper.Step>
          <Stepper.Step name="step3">
            <div>Step3</div>
          </Stepper.Step>
        </Stepper>
      </div>
    )
  }
}
