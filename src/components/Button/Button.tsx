import * as S from './style'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
}

export function Button({ children, ...props }: Props) {
  return <S.Box {...props}>{children}</S.Box>
}
