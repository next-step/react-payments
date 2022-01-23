import * as S from './style'

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <S.Box {...props}>{children}</S.Box>
}
