import { render, screen } from '@/tests/test-utils'
import { Box } from '@/components'

describe('Box 컴포넌트 렌더링 테스트', () => {
  test('as 로 지정한 엘리먼트를 렌더링한다', () => {
    render(<Box as="h1">Box</Box>)
    const rendered = screen.getByRole('heading', {
      level: 1,
    })
    expect(rendered).toBeInTheDocument()
  })

  test('as로 지정하지 않으면 기본적으로 div를 렌더링 한다', () => {
    render(<Box>Box</Box>)
    const rendered = screen.getByText('Box')
    const notIntended = screen.queryByRole('heading', {
      level: 1,
    })
    expect(rendered).toBeInTheDocument()
    expect(notIntended).not.toBeInTheDocument()
  })
})
