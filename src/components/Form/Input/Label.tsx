interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName?: string
}

export default function Label({ labelName = '', id, children }: Props) {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      {children}
    </>
  )
}
