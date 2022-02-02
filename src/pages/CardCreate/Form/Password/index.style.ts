import styled from 'styled-components'

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
`

const PasswordInputContainer = styled.div<{ isWhite?: boolean }>`
  width: 45px;
  height: 43px;
  margin-right: 7px;
  background-color: ${({ isWhite }) => (isWhite ? 'white' : '#ECEBF1')};
`

export default { PasswordContainer, PasswordInputContainer }
