import styled from 'styled-components'
import { MINT } from 'styles/colors'

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Box {...props}>{children}</Box>
}

export const Box = styled.button`
  border: 0;
  padding: 8px 12px;
  font-size: 16px;
  color: ${MINT};
  background: #fff;
`
