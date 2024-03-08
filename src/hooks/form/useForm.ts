import { ChangeEvent, FocusEvent, FormEvent, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormValues = Record<string, any>

type FormErrors<T extends FormValues> = {
  [P in keyof T]: string
}

export type FormTouched<T extends FormValues> = {
  [P in keyof T]: boolean
}

export interface UseFormProps<T extends FormValues> {
  initialValues: T
  validate: (values: T) => FormErrors<T>
  onSubmit: (values: T) => void
}

export function useForm<T extends FormValues>({
  initialValues,
  validate,
  onSubmit,
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<FormErrors<T>>({} as FormErrors<T>)
  const [touched, setTouched] = useState<FormTouched<T>>({} as FormTouched<T>)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 모든 필드에 방문했다고 표시
    setTouched(
      Object.keys(values).reduce((touched: FormTouched<T>, field: keyof T) => {
        touched[field] = true

        return touched
      }, {} as FormTouched<T>)
    )

    const errors = validate(values)

    setErrors(errors)

    if (Object.values(errors).some((v) => v)) {
      return
    }

    // useForm의 폼 제출을 완료하고 사용하는 쪽으로 알림
    onSubmit(values)
  }

  // 입력값에 따라 검증 함수를 실행하는 함수를 정의
  const runValidator = useCallback(() => validate(values), [values])

  useEffect(() => {
    const errors = runValidator()

    setErrors(errors)
  }, [runValidator])

  const getFieldProps = (name: keyof T) => {
    const value = values[name]
    const onBlur = handleBlur
    const onChange = handleChange

    return {
      name,
      value,
      onBlur,
      onChange,
    }
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    getFieldProps,
  }
}
