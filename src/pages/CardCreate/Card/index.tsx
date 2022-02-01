import { useEffect } from 'react'
import Card from '../../../components/Card'
import {
  CardType,
  CardTypeAccordingToStartsWith,
} from '../../../components/Form'
import { useCardFormState } from '../../../context/Form/hooks'
import Styled from './index.style'

const CreateCard = ({
  cardType,
  setCardType,
  setModalIsOpen,
}: CreateCardProp) => {
  const { cardNumber, cardExpire, owner } = useCardFormState()
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } = cardNumber
  const { expireAtMonth, expireAtYear } = cardExpire

  useEffect(() => {
    if (isValidCardNumbers()) {
      const startNumber =
        +cardNumber1[0] as keyof typeof CardTypeAccordingToStartsWith

      setCardType(CardTypeAccordingToStartsWith[startNumber])
    }

    function isValidCardNumbers() {
      return (
        isValidLength(cardNumber1) &&
        isValidLength(cardNumber2) &&
        isValidLength(cardNumber3) &&
        isValidLength(cardNumber4)
      )
    }

    function isValidLength(number: string) {
      return number.length === 4
    }
  }, [cardNumber1, cardNumber2, cardNumber3, cardNumber4, setCardType])

  return (
    <Styled.CardContainer>
      <Card
        type={cardType}
        number1={cardNumber1}
        number2={cardNumber2}
        number3={cardNumber3}
        number4={cardNumber4}
        month={expireAtMonth}
        year={expireAtYear}
        owner={owner}
        setModalIsOpen={setModalIsOpen}
      />
    </Styled.CardContainer>
  )
}

export default CreateCard

interface CreateCardProp {
  cardType: CardType | undefined
  setCardType: React.Dispatch<React.SetStateAction<CardType | undefined>>
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
