import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { PageList } from './pages.stories'
import '@testing-library/jest-dom'

describe('ListPage', () => {
  it('render cards', () => {
    const { getAllByTestId } = render(<PageList {...PageList.args} />)
    expect(getAllByTestId('card-deletable').length).toBe(2)
  })

  it('delete card', () => {
    const { getAllByTestId } = render(<PageList {...PageList.args} />)
    fireEvent.click(getAllByTestId('delete-card')[0])
    expect(getAllByTestId('card-deletable').length).toBe(1)
  })
})
