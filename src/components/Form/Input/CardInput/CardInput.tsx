import React from 'react'
import Label from '../Label'
import * as S from './style'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string
  errMessages?: string
}

export default function CardInput({ labelName, errMessages, ...props }: Props) {
  return (
    <Label labelName={labelName}>
      <S.Input {...props} />
      {errMessages && <span>{errMessages}</span>}
    </Label>
  )
}
