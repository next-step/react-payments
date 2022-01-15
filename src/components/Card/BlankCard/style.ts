import styled from 'styled-components'

export const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

const FLEX = 1

export const Name = styled.span`
  padding: 12px 16px;
  flex: ${FLEX};
`

export const Chip = styled.div`
  flex: ${FLEX};
  width: 40px;
  height: 26px;
  margin: 0 16px;
  background: #cbba64;
  border-radius: 4px;
`

export const SerialNums = styled.span`
  flex: ${FLEX};
  padding: 8px 0;
  text-align: center;
`

export const Info = styled.div`
  flex: ${FLEX};
  padding: 2px 0px;
  display: flex;
  justify-content: space-between;
`

export const UserName = styled.span`
  padding: 0 16px;
`

export const ExpiredDate = styled(UserName)``
