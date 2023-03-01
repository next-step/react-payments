import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from 'components/@common';
import type { CreditCardProps } from './CreditCard.types';

export const Wrapper = styled.div<CreditCardProps>`
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  padding: 15px;

  ${({ theme, color }) => css`
    background-color: ${theme.color[color]};
  `}

  width: 70%;
  height: 140px;
`;

export const Name = styled.p`
  font-size: 13px;
`;

export const CardChip = styled.div`
  margin: 10px 0;
  width: 25%;
  height: 30%;
  background-color: #cbba64;
  border-radius: 7px;
`;

export const FlexWrapper = styled(Box)`
  height: 25%;
  gap: 3px;
`;

export const SmallText = styled.p`
  font-size: 13px;
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const NumberText = styled.h3`
  font-size: 20px;
  letter-spacing: 3px;
`;
