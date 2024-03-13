import { useEffect } from 'react'
import { Snapshot } from 'xstate'
import { useMachine } from '@xstate/react'
import { paymentsMachine } from '@/xstate/payments-machine'

const STORAGE_KEY = 'payments'
const storageValue = localStorage.getItem(STORAGE_KEY)
const persistedState = storageValue ? (JSON.parse(storageValue) as Snapshot<unknown>) : undefined

export const usePaymentsStepMachine = () => {
  const [{ value: currentStep, context }, send, actorRef] = useMachine(paymentsMachine, {
    snapshot: persistedState,
  })

  useEffect(() => {
    const subscription = actorRef.subscribe(snapshot => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
    })
    return () => subscription.unsubscribe()
  }, [actorRef])

  return [currentStep as string, context, send] as const
}
