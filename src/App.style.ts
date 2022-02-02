import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`

const TestInput = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`

const App = styled.div`
  max-width: 500px;
  min-width: 375px;
  width: 100%;
  max-height: 700px;
  padding: 1rem 2rem;
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`

export default { Container, TestInput, App }
