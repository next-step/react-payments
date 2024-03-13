import { useFormContext } from '@/hooks/form/formContext'
import { FormType } from '@/service/payments/payments.type'

export const CardPassword = () => {
  const { getFieldProps, errors, touched } = useFormContext<FormType>()

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>

      <div style={{ display: 'grid', gridTemplateColumns: '43px 43px 43px 43px', gap: '10px' }}>
        <input
          className="input-basic w-15"
          type="password"
          {...getFieldProps('cardPassword1')}
          maxLength={1}
        />
        <input
          className="input-basic w-15"
          type="password"
          {...getFieldProps('cardPassword2')}
          maxLength={1}
        />
        <input
          value={1}
          className="input-basic w-15"
          type="password"
          style={{ backgroundColor: 'transparent' }}
        />
        <input
          value={1}
          className="input-basic w-15"
          type="password"
          style={{ backgroundColor: 'transparent' }}
        />
      </div>

      {[errors.cardPassword1, errors.cardPassword2].some((val) => val) &&
        [touched.cardPassword1, touched.cardPassword2].every((val) => val) && (
          <span>{errors.cardPassword1 || errors.cardPassword2}</span>
        )}
    </div>
  )
}
