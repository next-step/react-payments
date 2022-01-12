import styles from './index.module.css'

interface FormInputProps {
  label: string
  type: 'number' | 'string'
}

const FormInput = <T extends any>({ label, type }: FormInputProps) => {
  const state = ''

  return (
    <div className={styles.container}>
      <label>
        {label}
        <input type={type}></input>
      </label>
    </div>
  )
}

export { FormInput }
