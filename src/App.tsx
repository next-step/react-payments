import Payments from '.'
import CardInfoProvider from './context/paymentContext'

function App() {
  return (
    <CardInfoProvider>
      <Payments />
    </CardInfoProvider>
  )
}

export default App
