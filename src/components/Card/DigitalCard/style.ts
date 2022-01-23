import styled, { css } from 'styled-components'
import { CARD } from 'styles/colors'

export const Box = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  border-radius: 8px;
  ${({ bgColor }) =>
    bgColor &&
    css`
      background: ${CARD[bgColor]};
    `}
`
export const Type = styled.span`
  padding: 12px 16px;
  flex: 1;
`

export const Chip = styled.div`
  width: 40px;
  height: 26px;
  margin: 8px 16px;
  background: #cbba64;
  border-radius: 4px;
`

export const SerialNums = styled.span`
  flex: 0.5;
  padding: 8px 0;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 12px;
`

export const Input = styled.input`
  width: 20%;
  text-align: center;
  border: none;
  background: none;
  letter-spacing: 2px;
`

export const Info = styled.div`
  flex: 1;
  padding: 4px 0px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`

export const OwnerName = styled.span`
  padding: 0 16px;
`

export const ExpiredDate = styled(OwnerName)``
