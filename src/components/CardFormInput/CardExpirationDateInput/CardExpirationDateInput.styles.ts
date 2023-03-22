import styled from 'styled-components';
import { Text, Input } from 'components/common';
export const Layout = styled.div`
  margin-top: 20px;
`;
export const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;
export const Wrapper = styled.div`
  margin-top: 3px;
  padding-left: 3px;
`;
export const Container = styled.div`
  display: flex;
  width: 50%;
  gap: 5px;
`;
export const CardExiprationDateInput = styled(Input)``;
export const CardExiprationDateText = styled(Text)``;
