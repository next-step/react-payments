import { useContext, useEffect, useState } from 'react'
import { UpdateCardInfoContext } from '../context/paymentContext'

const useDefaultInput = () => {
  const [state, setState] = useState('')
  const updateCardInfo = useContext(UpdateCardInfoContext)
  const handleChange = (param: string) => {
    setState(param)
  }

  useEffect(() => {
    updateCardInfo({ name: state })
  }, [state])

  return [state, handleChange] as const
}

export default useDefaultInput
