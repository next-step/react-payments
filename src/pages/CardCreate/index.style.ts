import styled from 'styled-components'

const CardCreateContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonContaienr = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 25px;
`

const CreateCardButton = styled.button`
  color: #04c09e;
  border: none;
  background-color: white;
  font-size: 14px;
`

export default {
  CardCreateContainer,
  ButtonContaienr,
  CreateCardButton,
}
