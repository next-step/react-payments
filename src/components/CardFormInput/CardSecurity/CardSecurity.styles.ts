import styled from 'styled-components';
import { Text, Input, KeyBoardIcon, HelpIcon } from 'components/common';

export const Layout = styled.div`
  margin-top: 20px;
`;
export const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;
export const ErrorText = styled(Text)``;
export const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const CardSecurityInput = styled(Input)`
  width: 20%;
  font-size: 30px;
  margin-right: 10px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const HelpButton = styled(HelpIcon)``;
export const KeyBoardButton = styled(KeyBoardIcon)``;
