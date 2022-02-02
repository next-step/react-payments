import styled from 'styled-components'

const HelpIcon = styled.div`
  margin-top: 13.5px;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 1px solid black;
`

const CvcInputContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 11px;
`
const CvcContainer = styled.div`
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export default { HelpIcon, CvcContainer, CvcInputContainer }
