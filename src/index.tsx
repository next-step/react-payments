import { useState } from 'react'
import AddCard from './AddCard'
// import AddCardType from './AddCardType'
import CardList from './CardList'

export type FunnelStep =
  | {
      step: 'add'
    }
  | { step: 'select' }
  | { step: 'list' }

const Payments = () => {
  const [funnelState, setFunnelState] = useState<FunnelStep>({ step: 'add' })
  return (
    <>
      {funnelState.step === 'add' && <AddCard onBack={() => setFunnelState({ step: 'list' })} onNext={() => setFunnelState({ step: 'select' })} />}
      {/* {funnelState.step === 'select' && <AddCardType />} */}
      {funnelState.step === 'list' && <CardList />}
    </>
  )
}

export default Payments
