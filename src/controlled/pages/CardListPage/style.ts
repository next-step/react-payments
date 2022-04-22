import styled from 'styled-components'

export const Box = styled.div`
  padding: 32px 16px;
`

export const Header = styled.header`
  text-align: center;
  font-size: 20px;
  padding: 8px 0;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  position: relative;
`
export const DigitalCardBlock = styled.div`
  &:hover {
    cursor: pointer;
  }
`

export const Name = styled.div`
  text-align: center;
`

export const Delete = styled(Name)`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  border: 1px solid gray;
  border-radius: 50%;
  font-size: 16px;
  color: gray;
  &:hover {
    border: 1px solid red;
    color: red;
  }
`

export const AddCard = styled.div`
  font-size: 32px;
  min-height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
`
