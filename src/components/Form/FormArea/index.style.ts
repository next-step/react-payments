import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`

const ErrorMessage = styled.span`
  color: #cc0000;
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
`

export default {
  Container,
  Label,
  LabelContainer,
  ErrorMessage,
}
