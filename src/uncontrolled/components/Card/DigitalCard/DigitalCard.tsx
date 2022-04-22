import styled, { css } from 'styled-components'
import type { ValueOf } from 'uncontrolled/type'

type Props = {
  type?: string
  size?: 'lg' | 'md' | 'sm' | 'xs'
  cardSerialNums?: string
  ownerName?: string
  date?: string
}

export default function DigitalCard(props: Props) {
  const { type, size = 'md', cardSerialNums = '', ownerName = 'NAME', date = 'MM / YY' } = props
  return (
    <Box size={size}>
      <Type>{type && `${type}카드`}</Type>
      <Chip />
      <div>{cardSerialNums}</div>
      <Info>
        <div>{ownerName}</div>
        <div>{date}</div>
      </Info>
    </Box>
  )
}

const Box = styled.div<{ size?: ValueOf<Pick<Props, 'size'>> }>`
  margin: 12px 0;
  width: 208px;
  min-height: 130px;
  height: 130px;
  color: #575757;
  background: #e5e5e5;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  ${({ size }) =>
    size === 'lg' &&
    css`
      width: 290px;
      height: 180px;
      min-height: 180px;
    `}
`
const Type = styled.div`
  flex: 1;
`

const Chip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
  flex: 1;
`

const Info = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex: 1.5;
`
