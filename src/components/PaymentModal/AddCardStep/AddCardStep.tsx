import { Card } from '@/components/Card'
import { BottomSheet } from '@/components/common/BottomSheet'
import { CardDateInput } from '@/components/common/CardDateInput'
import { CardNumberInput } from '@/components/common/CardNumberInput'
import { CardPasswordInput } from '@/components/common/CardPasswordInput'
import { Input } from '@/components/common/Input'
import { MaxLengthNumberInput } from '@/components/common/MaxLengthNumberInput'
import { useDialog } from '@/hooks/useDialog'

export const AddCardStep = () => {
  const { isOpen, close, open } = useDialog()

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">카드 추가</h2>
        <Card.Empty />
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <CardNumberInput />
        </div>
        <div className="input-container">
          <span className="input-title">만료일</span>
          <CardDateInput />
        </div>
        <div className="input-container">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <Input
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
          />
        </div>
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <MaxLengthNumberInput width="25%" maxLength={3} />
        </div>
        <div className="input-container">
          <span className="input-title">카드 비밀번호</span>
          <CardPasswordInput />
        </div>
        <div className="button-box">
          <span
            role="button"
            className="button-text"
            onClick={open}
            tabIndex={0}>
            다음
          </span>
        </div>
      </div>
      <BottomSheet isOpen={isOpen} onClose={close}>
        <div className="flex-center">
          <div
            className="modal-item-container"
            role="button"
            onClick={close}
            tabIndex={0}>
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
        </div>
      </BottomSheet>
    </div>
  )
}
