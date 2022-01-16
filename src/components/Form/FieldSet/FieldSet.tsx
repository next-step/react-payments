interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  legend: string
}

export default function FieldSet({ legend = '', children }: Props) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
}
