import styled from 'styled-components'
import { verticalCenterContainer } from '../../css/layout'

const CardList = styled.div``

const Container = styled.div`
  ${verticalCenterContainer}
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

const CenterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const CardNameInput = styled.input`
  width: 244px;
  height: 28px;
  padding-bottom: 6px;
  border: none;
  border-bottom: 2px solid black;
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  outline: none;
`

const SubmitButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const SubmitButton = styled.button`
  color: #04c09e;
  border: none;
  background-color: white;
  font-size: 14px;
`

export default {
  CardList,
  Container,
  HeaderContainer,
  CenterBox,
  CardNameInput,
  SubmitButtonBox,
  SubmitButton,
}
