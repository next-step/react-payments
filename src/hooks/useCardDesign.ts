import { useState, MouseEvent } from 'react'

export const useCardDesign = () => {
  const [toggleModal, setToggleModal] = useState(true)
  const [cardDesign, setCardDesign] = useState('')

  const toggleModalHandler = () => {
    setToggleModal((prev) => !prev)
  }

  const cardDesignNameHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setCardDesign(e.currentTarget.name)
    setToggleModal((prev) => !prev)
  }

  const validation = cardDesign !== ''

  return { cardDesign, toggleModal, cardDesignNameHandler, toggleModalHandler, validation }
}
