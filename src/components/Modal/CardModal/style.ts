import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  border-radius: 12px 12px 0 0;
  background-color: #fdfdfd;
`

export const Patterns = styled.div`
  padding: 24px 64px;
  display: flex;
  flex-wrap: wrap;
  min-width: 320px;
`

export const Pattern = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 20%;
  margin: 8px;
`
export const Name = styled.span`
  color: #525252;
`

export const Wrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  margin: 4px;
  background: #fff;
`
