import React from 'react';
import styled from 'styled-components';


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

const StyledInput = styled.input<{ $size?: 'block' | 'sm' | 'md' }>`
	background-color: #ecebf1;
	height: 45px;
	width: ${(props) =>
		props.$size === 'block' ? '100%' : props.$size === 'sm' ? '24px' : '84px'};
	text-align: ${(props) => (props.$size === 'block' ? 'left' : 'center')};
	outline: 2px solid transparent;
	outline-offset: 2px;
	border-color: #9ca3af;
	border: none;
	border-radius: 0.25rem;
	padding-left:12px;
`

const StyledLength=styled.span`
		font-size: 12px;
		font-weight: 500;
`
const Input = ({
  type,
  size,
  label,
  placeholder,
  maxLength,
  onChange,
  value,
  isShowLength,
}: {
  type?: 'text' | 'password'
  size?: 'block' | 'sm' | 'md'
  label?: string
  placeholder?: string
  maxLength?: number
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  isShowLength?:boolean
}) => {
  return (
    <div className="input-container">
      {label && (
        <StyledInputLabel for={label}>
          {label}
          {isShowLength && (
            <StyledLength>
              {value?.length}/{maxLength}
            </StyledLength>
          )}
        </StyledInputLabel>
      )}
      {!label&&isShowLength && (
        <StyledLength>
          {value?.length}/{maxLength}
        </StyledLength>
      )}
      <StyledInput
        id={label}
        value={value}
        type={type ? type : 'text'}
        className="input-basic"
        placeholder={placeholder ? placeholder : ''}
        maxLength={maxLength}
        $size={size ? size : 'block'}
        onChange={onChange}
      />
    </div>
  )
}


export default Input;
