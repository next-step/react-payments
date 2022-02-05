import React from 'react'
import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  legend: string
  errorMessage?: string
}

export default function FieldSet({ legend = '', children, errorMessage }: Props) {
  return (
    <Fieldset>
      <legend>{legend}</legend>
      {children}
      {errorMessage && <Error>{errorMessage}</Error>}
    </Fieldset>
  )
}

const Fieldset = styled.fieldset`
  border: none;
`
const Error = styled.span`
  display: inline-block;
  padding: 4px 0 0;
  color: red;
`
