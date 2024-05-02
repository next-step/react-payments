import { Input } from '../../common/Input'
import ui from '@/styles/index.module.css'
import PrivateNumber from '../PrivateNumber'
import useCardInfo from '@/hooks/useCardInfo'

export const CardPassword = () => {
  const { cardInfo, updateCardInfo, privateKeypad, setPrivateKeypad } = useCardInfo()

  const changeNumber = (key: string, value: string) => {
    updateCardInfo({ ...cardInfo, [key]: value })
  }

  return (
    <div className={ui['row-container']}>
      <Input
        type="password"
        value={cardInfo?.password || ''} //
        onFocus={() => {
          setPrivateKeypad({ key: 'password', isOpen: true })

          const password = cardInfo.password
          if (password) changeNumber(privateKeypad.key, '')
        }}
        readOnly={true}
        size="xsmall"
        label="카드 비밀번호"
      />

      {privateKeypad.isOpen && (
        <PrivateNumber
          privateNumberLength={2}
          changeNumber={(value) => changeNumber(privateKeypad.key, value)}
          close={() => setPrivateKeypad(() => ({ key: '', isOpen: false }))}
        />
      )}
    </div>
  )
}
