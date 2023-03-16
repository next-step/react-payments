import styled from 'styled-components';
import { Text } from 'components/common/Text';
import { Input } from 'components/common/Input';
export const Layout = styled.div`
  margin-top: 20px;
`;
export const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;
export const Container = styled.div`
  display: flex;
  width: 70%;
  gap: 5px;
`;
export const CardPasswordInput = styled(Input)``;
export const ErrorText = styled(Text)``;
