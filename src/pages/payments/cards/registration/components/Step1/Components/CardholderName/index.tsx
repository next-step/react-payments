import { TextCounter } from '@/components/TextCounter'
import { useFormContext } from '@/hooks/form/formContext'
import { FormType } from '@/service/payments/payments.type'

import { CARD_HOLDER_NAME_MAX_LENGTH } from '../../../../service/const'

export const CardholderName = () => {
  const { getFieldProps, errors, touched, values } = useFormContext<FormType>()

  return (
    <>
      <div className="input-container">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="input-title">카드 소유자 이름(선택)</span>
          <TextCounter
            currentLength={values.cardholderName.length}
            maxLength={CARD_HOLDER_NAME_MAX_LENGTH}
          />
        </div>
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
