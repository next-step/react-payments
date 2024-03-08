import './index.css'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

interface LabelProps extends ComponentPropsWithoutRef<'label'> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return <label ref={ref} className={['container', className].join(' ')} {...props} />
})
