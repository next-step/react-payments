import { CardType } from '../Form'
import CardExpire from './CardExpire'
import CardNumber from './CardNumber'
import CardOwner from './CardOnwer'
import Styled from './index.style'

interface CardProp {
  type?: CardType
  number1: string
  number2: string
  number3: string
  number4: string
  name: string
  month: string
  year: string
  setModalIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
const Card = ({
  type,
  number1,
  number2,
  number3,
  number4,
  month,
  name,
  year,
  setModalIsOpen,
}: CardProp) => (
  <Styled.Card
    {...(type && { bgColor: BackgroundColorAccordingToStartsWith[type] })}
    {...(setModalIsOpen && { ableToModalOpen: true })}
    {...(setModalIsOpen && { onClick: () => setModalIsOpen(true) })}
  >
    <Styled.CardTop>
      <Styled.CardText>{type || '클린'}카드</Styled.CardText>
    </Styled.CardTop>
    <Styled.CardMiddle>
      <Styled.CardSmallChip />
    </Styled.CardMiddle>
    <Styled.CardBottom>
      <CardNumber
        number1={number1}
        number2={number2}
        number3={number3}
        number4={number4}
      />
      <Styled.CardBottomInfo>
        <CardOwner name={name} />
        <CardExpire month={month} year={year} />
      </Styled.CardBottomInfo>
    </Styled.CardBottom>
  </Styled.Card>
)

export default Card

export const BackgroundColorAccordingToStartsWith = {
  포코: '#E24141',
  준: '#547CE4',
  공원: '#73BC6D',
  브랜: '#DE59B9',
  로이드: '#94DACD',
  도비: '#E76E9A',
  콜린: '#F37D3B',
  썬: '#FBCD58',
} as const
