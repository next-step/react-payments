import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid red;
`

export const Container = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  border: 1px solid blue;
  border-radius: 12px 12px 0 0;
  background-color: #fdfdfd;
`

export const Patterns = styled.div`
  border: 1px solid red;
  padding: 16px 64px;
  display: flex;
  flex-wrap: wrap;
`

export const Pattern = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 21%;
  margin: 5px;
`
export const Name = styled.span`
  color: #525252;
`
