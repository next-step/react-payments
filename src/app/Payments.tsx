import AddCard from './AddCard'
import AddComplete from './AddComplete'
import CardList from './CardList'
import { Stepper } from './common/Stepper'

const Payments = () => {
  return (
    <Stepper>
      <Stepper.Step step="add">
        <AddCard />
      </Stepper.Step>

      <Stepper.Step step="list">
        <CardList />
      </Stepper.Step>

      <Stepper.Step step="complete">
        <AddComplete />
      </Stepper.Step>
    </Stepper>
  )
}

export default Payments
