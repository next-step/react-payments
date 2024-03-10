import AddCard from './AddCard'
import CardList from './CardList'
import { Stepper } from './Stepper'

const Payments = () => {
  return (
    <Stepper>
      <Stepper.Step step="add">
        <AddCard />
      </Stepper.Step>

      <Stepper.Step step="list">
        <CardList />
      </Stepper.Step>
    </Stepper>
  )
}

export default Payments
