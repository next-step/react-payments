import styled from '@emotion/styled';

interface InputBoxProps {
  width?: number;
}

interface InputContainerProps {
  flexCenter?: boolean;
  width?: number;
}

export const InputContainer = styled.div`
  margin: 16px 0;

  ${({ flexCenter }: InputContainerProps) =>
    flexCenter &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  width: ${({ width }) => `${width}%`};
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;

  ${({ width }: InputBoxProps) =>
    width &&
    `
    width: ${width}%;
  `}
`;

export const InputTitle = styled.span`
  display: flex;
  align-items: center;

  font-size: 12px;
  line-height: 14px;

  margin-bottom: 4px;

  color: #525252;
`;

export const InputBasic = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;

  width: ${({ width }) => `${width}%`};
`;

export const InputUnderline = styled.input`
  text-align: center;
  border: none;
  background: none;
  outline: none;

  margin: 16px 0;
  padding: 4px 0;

  border-bottom: 1px solid #383838;

  width: ${({ width }) => `${width}%`};
`;
