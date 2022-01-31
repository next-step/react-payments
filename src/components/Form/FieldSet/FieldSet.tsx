import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  legend: string
}

export default function FieldSet({ legend = '', children }: Props) {
  return (
    <Fieldset>
      <legend>{legend}</legend>
      {children}
    </Fieldset>
  )
}

const Fieldset = styled.fieldset`
  border: none;
`
