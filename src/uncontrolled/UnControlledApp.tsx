import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export default function UnControlledApp({ children }: Props) {
  return (
    <Root>
      <App>{children}</App>
    </Root>
  )
}

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
`

export const App = styled.div`
  height: 100%;
  width: 100%;
`
