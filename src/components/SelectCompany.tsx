import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CardCompanies } from 'constants/Card';
import { theme } from 'styles/theme';
import { Box } from './@common';

type ColorKey = (typeof theme.color)[keyof typeof theme.color];

const SelectCompany = () => {
  return (
    <Wrapper display="grid" alignItems="center">
      {Object.entries(CardCompanies).map(([key, value]) => (
        <CompanyWrapper key={key}>
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

const ColorCircle = styled.div<{ color: ColorKey }>`
  height: 38px;
  max-width: 38px;
  border-radius: 50%;
  margin: 0 auto;

  ${({ color }) => css`
    background-color: ${color};
  `}
`;

const Text = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 7px;
  color: ${({ theme }) => theme.color.gray07};
`;
