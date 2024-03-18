import React from 'react'
import styled from 'styled-components'

const StyledInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`

const StyledInput = styled.input<{ $widthSize?: 'block' | 'sm' | 'md' }>`
  color: #94dacd;
  font-weight: 700;
  background-color: #ecebf1;
  height: 45px;
  width: ${(props) =>
    props.$widthSize === 'block'
      ? '100%'
      : props.$widthSize === 'sm'
        ? '24px'
        : '84px'};
  text-align: ${(props) => (props.$widthSize === 'block' ? 'left' : 'center')};
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
  padding-left: 12px;
`

const StyledLength = styled.span`
  font-size: 12px;
  font-weight: 500;
`

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  widthSize?: 'block' | 'sm' | 'md'
  isShowLength?: boolean
  label?: string
}

const Input = (props: InputProps) => {
  return (
    <div className="input-container">
      {props.label && (
        <StyledInputLabel htmlFor={props.label}>
          {props.label}
          {props?.isShowLength && (
            <StyledLength>
              {String(props?.value).length}/{props?.maxLength}
            </StyledLength>
          )}
        </StyledInputLabel>
      )}
      {!props?.label && props?.isShowLength && (
        <StyledLength>
          {String(props?.value).length}/{props?.maxLength}
        </StyledLength>
      )}
      <StyledInput
        id={props?.label}
        value={props?.value}
        type={props?.type ?? 'text'}
        className="input-basic"
        placeholder={props?.placeholder ? props?.placeholder : ''}
        maxLength={props?.maxLength}
        $widthSize={props?.widthSize ? props?.widthSize : 'block'}
        onChange={props?.onChange}
      />
    </div>
  )
}

export default Input
