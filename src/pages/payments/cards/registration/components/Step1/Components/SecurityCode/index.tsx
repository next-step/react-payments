import { useFormContext } from '@/hooks/form/formContext'
import { FormType } from '@/service/payments/payments.type'

export const SecurityCode = () => {
  const { getFieldProps, errors, touched } = useFormContext<FormType>()

  return (
    <>
      <div className="input-container" style={{ width: '84px' }}>
        <span className="input-title">보안코드(CVC/CVV)</span>
        <input
          className="input-basic w-25"
          type="password"
          maxLength={3}
          {...getFieldProps('securityCode')}
        />
      </div>

      <div>{errors.securityCode && touched.securityCode && <span>{errors.securityCode}</span>}</div>
    </>
  )
}
