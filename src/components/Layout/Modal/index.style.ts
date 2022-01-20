import styled from 'styled-components'

const RelativeBox = styled.div`
  max-width: 500px;
  min-width: 375px;
  width: 100%;
  max-height: 700px;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: absolute;
  border-radius: 15px;
  display: flex;
  margin-left: -187.5px;
  z-index: 10;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.45);
  margin-top: 8px;
`

const Container = styled.div`
  position: relative;
`

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`

export default { RelativeBox, Container, ModalContainer }
