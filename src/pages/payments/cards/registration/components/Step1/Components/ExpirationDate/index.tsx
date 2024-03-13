import { InputWithMask } from '@/components/InputWithMask'
import { Label } from '@/components/Label'
import { useFormContext } from '@/hooks/form/formContext'
import { FormType } from '@/service/payments/payments.type'

export const ExpirationDate = () => {
  const { getFieldProps, errors, touched } = useFormContext<FormType>()

  return (
    <>
      <div className="input-container">
        <Label className="input-title">만료일</Label>
        <div className="input-box w-50">
          <InputWithMask
            mask="00 / 00"
            type="text"
            placeholder="MM / YY"
            {...getFieldProps('expirationDate')}
          />
        </div>
      </div>

      {errors.expirationDate && touched.expirationDate && <span>{errors.expirationDate}</span>}
    </>
  )
}
