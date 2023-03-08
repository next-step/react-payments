import Dot from 'components/common/Dot/Dot';
import styled from 'styled-components';
import { ReactEventHandler } from 'react';
export type CompanyListProps = {
  onSelectedCompany: ReactEventHandler<HTMLDivElement>;
};

export const CompanyList = ({ onSelectedCompany }: CompanyListProps) => {
  return (
    <Layout>
      <Container>
        <Dot color="red" value="하나카드" onClick={onSelectedCompany} />
        <Dot color="pink" value="국민카드" onClick={onSelectedCompany} />
        <Dot color="cyon" value="신한카드" onClick={onSelectedCompany} />
        <Dot color="purple" value="클린카드" onClick={onSelectedCompany} />
      </Container>
      <Container>
        <Dot color="blue" value="토스카드" onClick={onSelectedCompany} />
        <Dot color="green" value="네이버카드" onClick={onSelectedCompany} />
        <Dot color="yellow" value="카카오카드" onClick={onSelectedCompany} />
        <Dot color="orange" value="오렌지카드" onClick={onSelectedCompany} />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 375px;
  height: 220px;
  border-radius: 5px 5px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  z-index: 10;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CompanyList;
