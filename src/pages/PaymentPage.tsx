import { AddCardStep } from '@/components/PaymentModal/AddCardStep/AddCardStep'
import { CardListStep } from '@/components/PaymentModal/CardListStep/CardListStep'
import { CompletedAddCardStep } from '@/components/PaymentModal/CompletedAddCardStep/CompletedAddCardStep'
import { useStep } from '@/hooks/useStep'

export const PAYMENT_STEPS = [
  'add card',
  'completed add card',
  'card list'
] as const

export const PaymentPage = () => {
  const [Stepper, setStep] = useStep(PAYMENT_STEPS)

  return (
    <Stepper>
      <button type="button" onClick={() => setStep('add card')}>
        Add Card
      </button>
      <button type="button" onClick={() => setStep('completed add card')}>
        Completed add card
      </button>
      <button type="button" onClick={() => setStep('card list')}>
        Card list
      </button>
      <Stepper.Step name="add card">
        <AddCardStep />
      </Stepper.Step>
      <Stepper.Step name="completed add card">
        <CompletedAddCardStep />
      </Stepper.Step>
      <Stepper.Step name="card list">
        <CardListStep />
      </Stepper.Step>

      {/* <h2>2️⃣ 카드 추가 - 카드사 선택</h2>
      <div className="root">
        <div className="app">
          <h2 className="page-title">카드 추가</h2>
          <div className="card-box">
            <div className="small-card">
              <div className="card-top">
                <span className="card-text">클린카드</span>
              </div>
              <div className="card-middle">
                <div className="small-card__chip"></div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom__number">
                  <span className="card-text">1111 - 2222 - oooo - oooo</span>
                </div>
                <div className="card-bottom__info">
                  <span className="card-text">NAME</span>
                  <span className="card-text">MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <div className="input-box">
              <input className="input-basic" type="text" value="1111" />
              <input className="input-basic" type="text" value="2222" />
              <input className="input-basic" type="password" value="1111" />
              <input className="input-basic" type="password" value="1111" />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <div className="input-box w-50">
              <input className="input-basic" type="text" placeholder="MM" />
              <input className="input-basic" type="text" placeholder="YY" />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 소유자 이름(선택)</span>
            <input
              type="text"
              className="input-basic"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            />
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <input className="input-basic w-25" type="password" />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
          </div>
          <div className="button-box">
            <span className="button-text">다음</span>
          </div>
        </div>
        <div className="modal-dimmed">
          <div className="modal">
            <div className="flex-center">
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
            </div>
            <div className="flex-center">
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>3️⃣ 카드 추가 - 입력 완료</h2>
      <div className="root">
        <div className="app">
          <h2 className="page-title">카드 추가</h2>
          <div className="card-box">
            <div className="small-card">
              <div className="card-top">
                <span className="card-text">클린카드</span>
              </div>
              <div className="card-middle">
                <div className="small-card__chip"></div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom__number">
                  <span className="card-text">1111 - 2222 - oooo - oooo</span>
                </div>
                <div className="card-bottom__info">
                  <span className="card-text">YUJO</span>
                  <span className="card-text">12 / 23</span>
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <div className="input-box">
              <input className="input-basic" type="text" value="1111" />
              <input className="input-basic" type="text" value="2222" />
              <input className="input-basic" type="password" value="1111" />
              <input className="input-basic" type="password" value="1111" />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <div className="input-box w-50">
              <input
                className="input-basic"
                type="text"
                placeholder="MM"
                value="12"
              />
              <input
                className="input-basic"
                type="text"
                placeholder="YY"
                value="23"
              />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 소유자 이름(선택)</span>
            <input type="text" className="input-basic" value="YUJO" />
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <input className="input-basic w-25" type="password" value="111" />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <input className="input-basic w-15" type="password" value="1" />
            <input className="input-basic w-15" type="password" value="1" />
            <input className="input-basic w-15" type="password" value="1" />
            <input className="input-basic w-15" type="password" value="1" />
          </div>
          <div className="button-box">
            <span className="button-text">다음</span>
          </div>
        </div>
      </div> */}
    </Stepper>
  )
}
