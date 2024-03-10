import { createContext, useState } from 'react'
import { FunnelStep } from '../constant/step'

export const FunnelStepContext = createContext<FunnelStep>({ step: 'add' })
export const UpdateFunnelStepContext = createContext<(payload: FunnelStep) => void>(() => {})

const FunnelStepProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<FunnelStep>({ step: 'add' })

  return (
    <>
      <UpdateFunnelStepContext.Provider value={setStep}>
        <FunnelStepContext.Provider value={step}>{children}</FunnelStepContext.Provider>
      </UpdateFunnelStepContext.Provider>
    </>
  )
}

export default FunnelStepProvider
