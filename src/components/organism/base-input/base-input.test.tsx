import { describe } from 'vitest'
import { screen, render, userEvent } from '@/tests/test-utils'
import { BaseInput } from '@/components/organism/base-input/base-input.tsx'

const TEST_LABEL = 'input test abel'
const TEST_PLACEHOLDER = 'input test placeholder'
const TEST_INPUT_VALUE = 'input value test'

describe('baseinput unit test', () => {
  test('초기 렌더링 테스트 - label, placeholder를 확인할 수 있다.', () => {
    render(<BaseInput id="test-base-input" label={TEST_LABEL} placeholder={TEST_PLACEHOLDER} />)
    expect(screen.getByLabelText(TEST_LABEL)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(TEST_PLACEHOLDER)).toBeInTheDocument()
  })

  test('value가 입력되면 input에는 입력한 value가 나타난다', async () => {
    render(<BaseInput id="test-base-input" label={TEST_LABEL} placeholder={TEST_PLACEHOLDER} />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()

    await userEvent.type(inputElement, TEST_INPUT_VALUE)
    expect(inputElement).toHaveValue(TEST_INPUT_VALUE)
  })
})
