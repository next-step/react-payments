import styled from '@emotion/styled';

export const InputContainer = styled.div<{
  flexCenter?: boolean;
  width?: number;
}>`
  margin: 16px 0;

  ${({ flexCenter }) =>
    flexCenter &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  width: ${({ width }) => `${width}%`};
`;

export const InputBox = styled.div<{ width?: number }>`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;

  ${({ width }) =>
    width &&
    `
    width: ${width}%;
  `}
`;

export const InputTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  line-height: 14px;

  margin-bottom: 4px;

  color: #525252;
`;

export const InputBasic = styled.input<{
  width?: number;
  error?: boolean;
  textAlign: string;
}>`
  background-color: #ecebf1;
  height: 45px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
  box-sizing: border-box;

  width: ${({ width }) => (width ? `${width}%` : `100%`)};
  ${({ error }) =>
    error
      ? `border: 1px solid red`
      : `border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;`};

  ${({ textAlign }) =>
    textAlign === 'center'
      ? `text-align: center;`
      : `text-align: left; padding: 0px 12px;`};

  // type: number일 때 우측 화살표 숨김 처리
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin: 0px;
`;

export const OwnerLength = styled.span`
  float: right;
`;
