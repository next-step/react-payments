import { App } from '@/App'
import { render } from './render'
import { screen } from '@testing-library/react'

describe('<App/>', () => {
  it('h1 컴포넌트가 보여져야 한다.', () => {
    render(<App />)
    const H1 = screen.getByRole('heading')

    expect(H1).toBeDefined()
  })
})
