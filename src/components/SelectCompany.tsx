import { Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { CardCompanies } from 'constants/Card';

import type { ThemeKeys } from 'styles/theme';
import { Box } from './@common';

interface Props {
  onClick: Dispatch<SetStateAction<ThemeKeys>>;
}

const SelectCompany = ({ onClick }: Props) => {
  return (
    <Wrapper display="grid" alignItems="center">
      {Object.entries(CardCompanies).map(([key, value]) => (
        <CompanyWrapper key={key} onClick={() => onClick(value)}>
          <ColorCircle color={value} />
          <Text>{key}</Text>
        </CompanyWrapper>
      ))}
    </Wrapper>
  );
};

export default SelectCompany;

const Wrapper = styled(Box)`
  padding: 25px;
  height: 200px;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${({ theme }) => theme.color.white};
`;

const CompanyWrapper = styled.div`
  cursor: pointer;
`;

const ColorCircle = styled.div<{ color: ThemeKeys }>`
  height: 38px;
  max-width: 38px;
  border-radius: 50%;
  margin: 0 auto;

  ${({ theme, color }) => css`
    background-color: ${theme.color[color]};
  `}
`;

const Text = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 7px;
  color: ${({ theme }) => theme.color.gray07};
`;
