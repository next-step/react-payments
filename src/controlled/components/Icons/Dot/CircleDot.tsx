import styled from 'styled-components'

interface Props {
  width: number
  height: number
  bgColor: string
}

export default function CircleDot({ width = 5, height = 5, bgColor = '#bbb' }) {
  return <Dot width={width} height={height} bgColor={bgColor} />
}

const Dot = styled.div<Props>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  margin: 4px 20px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  display: inline-block;
  border: 1px solid red;
`
