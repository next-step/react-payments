import styled from '@emotion/styled';
import { Box } from 'components/@common';

export const Wrapper = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  padding: 15px;

  background-color: ${({ theme }) => theme.color.brand01};
  width: 70%;
  height: 140px;
`;

export const Name = styled.p`
  font-size: 13px;
`;

export const Chip = styled.div`
  margin: 10px 0;
  width: 25%;
  height: 30%;
  background-color: #cbba64;
  border-radius: 7px;
`;

export const Number = styled.h3`
  font-size: 20px;
  letter-spacing: 3px;
`;

export const FlexWrapper = styled(Box)`
  height: 25%;
  gap: 3px;
`;

export const HolderName = styled.p`
  font-size: 14px;
`;

export const Expiration = styled.p`
  font-size: 14px;
`;
