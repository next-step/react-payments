import styled, { css } from 'styled-components'

export const Box = styled.div`
  height: 100%;
  padding: 20px 24px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
`

export const H1 = styled.h1`
  padding-bottom: 1px;
`

export const FlexRowCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const FlexRowAlignCenter = styled.div`
  display: flex;
  align-items: center;
`

export const Form = styled.form`
  font-size: 12px;
  color: #525252;
`

export const FlexColumn = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`

export const IconWrapper = styled.div`
  margin: 20px 8px 0;
`

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
`
