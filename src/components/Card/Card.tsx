import React from 'react'
import * as S from './style'

interface Props {
  big?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  children: React.ReactNode
}

export function Card({ children, ...props }: Props) {
  return <S.Card {...props}>{children}</S.Card>
}
