import { RenderOptions, render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactNode } from 'react'

export const render = (component: ReactNode, options: RenderOptions = {}) => {
  const user = userEvent.setup()

  return {
    user,
    ...rtlRender(component, options)
  }
}
