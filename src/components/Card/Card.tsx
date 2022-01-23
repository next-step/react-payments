import React from 'react'
import * as S from './style'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  big?: boolean
  type?: string
}

export function Card({ children, ...props }: Props) {
  return <S.Card {...props}>{children}</S.Card>
}
