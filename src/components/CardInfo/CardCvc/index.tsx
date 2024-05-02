import { useState } from 'react'
import { Input } from '../../common/Input'
import ui from '@/styles/index.module.css'
import PrivateNumber from '../PrivateNumber'
import useCardInfo from '@/hooks/useCardInfo'

export const CardCvc = () => {
  const { cardInfo, updateCardInfo, privateKeypad, setPrivateKeypad } = useCardInfo()
  const [onFocus, setOnFocus] = useState(false)

  //css 처리도 방법일듯..
  const handleMouseEnter = () => {
    setOnFocus(true)
  }
  const handleMouseLeave = () => {
    setOnFocus(false)
  }

  const handleInputChange = (key: string, value: string) => {
    return updateCardInfo({
      ...cardInfo,
      [key]: value,
    })
  }

  if (!cardInfo) return null
  return (
    <div className={`${ui['row-container']} ${ui['tooltip-align']}`}>
      <Input
        type="password"
        value={cardInfo.cvc || ''}
        onFocus={() => {
          setPrivateKeypad({ key: 'cvc', isOpen: true })
          const { cvc } = cardInfo
          if (cvc) handleInputChange(privateKeypad.key, '')
        }}
        readOnly={true}
        size="small"
        label="보안코드(CVC/CVV)"
      />
      <div className={`${ui['tooltip-wrapper']}`} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
        <span>?</span>
      </div>
      <p className={`${ui['tooltip']} ${ui[onFocus ? 'hover' : '']}`} style={{ fontSize: '12px' }}>
        카드 뒷면의 3자리를 입력해주세요.
      </p>

      {privateKeypad.isOpen && (
        <PrivateNumber
          privateNumberLength={3}
          changeNumber={(value) => handleInputChange(privateKeypad.key, value)}
          close={() => setPrivateKeypad((state) => ({ ...state, isOpen: false }))}
        />
      )}
    </div>
  )
}
