import Payments from '.'
import FunnelStepProvider from './context/funnelStepContext'
import CardInfoProvider from './context/paymentContext'

function App() {
  return (
    <FunnelStepProvider>
      <CardInfoProvider>
        <Payments />
      </CardInfoProvider>
    </FunnelStepProvider>
  )
}

export default App
