import { FormType } from '@/pages/payments/cards/type'

import { useFormContext } from '../../../../contexts/FormContext'

export const CardholderName = () => {
  const { getFieldProps, errors, touched } = useFormContext<FormType>()

  return (
    <>
      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          {...getFieldProps('cardholderName')}
        />
      </div>

      {errors.cardholderName && touched.cardholderName && <span>{errors.cardholderName}</span>}
    </>
  )
}
