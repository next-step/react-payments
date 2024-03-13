import { useFormContext } from '@/hooks/form/formContext'
import { FormType } from '@/service/payments/payments.type'

export const CardNumber = () => {
  const { getFieldProps, errors, touched } = useFormContext<FormType>()

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          className="input-basic"
          type="text"
          maxLength={4}
          {...getFieldProps('cardNumber1')}
        />
        <div>-</div>
        <input
          className="input-basic"
          type="text"
          maxLength={4}
          {...getFieldProps('cardNumber2')}
        />
        <div>-</div>
        <input
          className="input-basic"
          type="password"
          maxLength={4}
          {...getFieldProps('cardNumber3')}
        />
        <div>-</div>
        <input
          className="input-basic"
          type="password"
          maxLength={4}
          {...getFieldProps('cardNumber4')}
        />
      </div>

      {[errors.cardNumber1, errors.cardNumber2, errors.cardNumber3, errors.cardNumber4].some(
        (val) => val
      ) &&
        [touched.cardNumber1, touched.cardNumber2, touched.cardNumber3, touched.cardNumber4].every(
          (val) => val
        ) && (
          <span>
            {errors.cardNumber1 || errors.cardNumber2 || errors.cardNumber3 || errors.cardNumber4}
          </span>
        )}
    </div>
  )
}
