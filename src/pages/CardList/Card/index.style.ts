import styled, { css } from 'styled-components'

const CardNameText = styled.span`
  font-weight: 700;
  color: #575757;
  font-size: 14px;

  margin-top: 5px;
  margin-bottom: 25px;
`

const CardContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
`

const CardOpacityContainer = styled.div<{ clicked?: boolean }>`
  ${({ clicked }) => clicked && { opacity: 0.4 }}
`

const CardClickedContainer = styled.div<{ clicked?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: default;
  ${({ clicked }) => clicked && { display: 'flex' }}
`

const CardClickButtonConatiner = styled.div`
  display: flex;
  width: 120px;
  height: 30px;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`

const commonButtonStyle = css`
  width: 50px;
  height: 30px;
  border-radius: 5px;
  color: #f3f3f3;
  font-size: 14px;
  font-weight: 700;
  user-select: 'none';
  border: none;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }
`

const CardDeleteButton = styled.button`
  ${commonButtonStyle}
  background: rgb(255, 27, 0);
  background: linear-gradient(
    0deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(253, 13, 2, 1) 100%
  );
`

const CardEditButton = styled.button`
  ${commonButtonStyle}
  background: rgb(133, 255, 123);
  background: linear-gradient(
    0deg,
    rgba(143, 234, 164, 1) 0%,
    rgba(123, 211, 153, 1) 100%
  );
`

export default {
  CardNameText,
  CardContainer,
  CardOpacityContainer,
  CardClickedContainer,
  CardClickButtonConatiner,
  CardDeleteButton,
  CardEditButton,
}
