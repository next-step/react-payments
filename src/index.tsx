import { useContext } from 'react'
import AddCard from './AddCard'
import CardList from './CardList'
import { Stepper } from './Stepper'
import { UpdateFunnelStepContext } from './context/funnelStepContext'

const Payments = () => {
  const updateFunnelStep = useContext(UpdateFunnelStepContext)
  return (
    <>
      <Stepper>
        <Stepper.Step step="add">
          <AddCard onBack={() => updateFunnelStep({ step: 'list' })} onNext={() => updateFunnelStep({ step: 'select' })} />
        </Stepper.Step>

        <Stepper.Step step="list">
          <CardList />
        </Stepper.Step>
      </Stepper>
    </>
  )
}

export default Payments
