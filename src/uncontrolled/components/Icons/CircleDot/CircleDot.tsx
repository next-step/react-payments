import styled from 'styled-components'

interface Props {
  width: number
  height: number
  backgroundColor: string
}

export default function CircleDot({ width = 5, height = 5, backgroundColor = '#bbb' }) {
  return <Dot width={width} height={height} backgroundColor={backgroundColor} />
}

const Dot = styled.div<Props>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
  display: inline-block;
`
