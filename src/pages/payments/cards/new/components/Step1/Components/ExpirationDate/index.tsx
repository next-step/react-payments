import { InputWithMask } from '@/components/InputWithMask'
import { Label } from '@/components/Label'

export const ExpirationDate = () => {
  return (
    <div className="input-container">
      <Label className="input-title">만료일</Label>
      <div className="input-box w-50">
        <InputWithMask
          mask="00 / 00"
          type="text"
          placeholder="MM / YY"
          onChange={(value) => null}
        />
      </div>
    </div>
  )
}
