import Payments from './app/Payments'
import CardInfoProvider from './context/paymentContext'

function App() {
  return (
    <CardInfoProvider>
      <Payments />
    </CardInfoProvider>
  )
}

export default App
