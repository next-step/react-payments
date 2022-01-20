import styled from 'styled-components'
import { BackgroundColorAccordingToStartsWith } from '../../../components/Card'
import { CardType } from '../../../components/Form'

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
`

const ModalContainer = styled.div`
  width: 100%;
  height: 227px;
  background-color: white;
  border-radius: 15px;
  padding: 34px 57px;
  padding-bottom: 41px;
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`

const ContentLineContainer = styled.div`
  height: 62px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const ContentLineSpace = styled.div`
  height: 26px;
  width: 100%;
`

const CardTypeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`

const CardTypeColorCircle = styled.div<{ cardType?: CardType }>`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: ${({ cardType }) =>
    cardType ? BackgroundColorAccordingToStartsWith[cardType] : 'white'};
`

const CardTypeText = styled.span`
  font-weight: 300;
  color: 525252;
  font-size: 12px;
`

export default {
  Container,
  ModalContainer,
  ContentContainer,
  ContentLineContainer,
  ContentLineSpace,
  CardTypeContainer,
  CardTypeColorCircle,
  CardTypeText,
}
