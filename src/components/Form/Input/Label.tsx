import styled from 'styled-components'

export interface LabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName?: string
  labelRight?: React.ReactNode
}

export default function Label({ labelName = '', id, labelRight, children }: LabelProps) {
  return (
    <>
      <Box>
        <label htmlFor={id}>{labelName}</label>
        {labelRight}
      </Box>
      {children}
    </>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`
