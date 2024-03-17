import { FunnelStep } from '../constant/step'
import CardListProvider from '../context/cardListContext'
import AddCard from './AddCard'
import AddComplete from './AddComplete'
import CardList from './CardList'
import { Stepper } from './common/Stepper'

export type StepProps = {
  onStep?: (step: FunnelStep) => void
}

const Payments = () => {
  return (
    <CardListProvider>
      <Stepper>
        <Stepper.Step step="add" renderStep={(updateStep) => <AddCard onStep={updateStep} />} />
        <Stepper.Step step="list" renderStep={(updateStep) => <CardList onStep={updateStep} />} />
        <Stepper.Step step="complete" renderStep={(updateStep) => <AddComplete onStep={updateStep} />} />
      </Stepper>
    </CardListProvider>
  )
}

export default Payments
