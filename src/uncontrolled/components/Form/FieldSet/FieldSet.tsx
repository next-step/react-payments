import React from 'react'

interface Props {
  legend?: string
  children: React.ReactNode
}

export default function FieldSet({ legend, children }: Props) {
  return (
    <fieldset>
      {legend && legend}
      {children}
    </fieldset>
  )
}
