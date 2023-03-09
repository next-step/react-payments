import { useNavigate } from 'react-router-dom'
import { State, useCardItemSetContext } from '../contexts/cardContext'

export const useCardStateCheck = (state: State[]) => {
  const setState = useCardItemSetContext()
  const navigate = useNavigate()

  const stateCheckAndNaviator = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    const findCardData = state.find((data) => data.ownerName === name)

    if (findCardData) {
      setState(findCardData)
      navigate('/card-add-complete')
    }
  }

  return { stateCheckAndNaviator }
}
