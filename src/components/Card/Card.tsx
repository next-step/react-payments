import * as S from './style'

interface Props {
  big?: string | boolean
  children: React.ReactNode
}

export function Card({ children, ...props }: Props) {
  return <S.Card {...props}>{children}</S.Card>
}
