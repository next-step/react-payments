import useInput from "../../hooks/useInput"

type InputPropsType = {
    type: 'text' | 'password',
    placeholder?: string
}

function Input(props: InputPropsType) {
    const {value, onChange} = useInput()

    return (
    <>
      <input className="input-basic" type={props.type} value={value} onChange={onChange} placeholder={props.placeholder} />
    </>
  )
}

export default Input
