import React from 'react';
import styled from 'styled-components';


export const StyledInput = styled.input`
  color: #94dacd;
  font-weight: 700;
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`
const DateInput = ({
  expiredMonth,
  expiredYear,
  onChangeMonth,
  onChangeYear,
}: {
  expiredMonth: string
  expiredYear: string
  onChangeMonth: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeYear: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="input-box w-50">
      <StyledInput
        type="text"
        value={expiredMonth}
        maxLength={2}
        placeholder="MM"
        onChange={onChangeMonth}
      />
      {expiredMonth && '/'}
      <StyledInput
        type="text"
        value={expiredYear}
        maxLength={2}
        placeholder="YY"
        onChange={onChangeYear}
      />
    </div>
  )
}
export default DateInput;