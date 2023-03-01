import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { DescriptionProps } from './FormFieldControl.types';

export const Fieldset = styled.fieldset`
  margin: 20px 0;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray08};
  display: flex;
  margin-bottom: 3px;
`;

export const Description = styled.p<DescriptionProps>`
  margin-top: 5px;
  font-size: 13px;
  text-align: right;
  color: ${({ theme }) => theme.color.gray05};

  ${({ isError, theme }) =>
    isError &&
    css`
      color: ${theme.color.red06};
    `}
`;
