import styled from 'styled-components';
import { Text, Button, IconButton, Card } from 'components/common';

export const Layout = styled.div`
  height: 100%;
  padding: 16px 24px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin-top: 10px;
  margin-bottom: 20px;
  gap: 20px;
`;

export const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;
export const FormPageText = styled(Text)``;
export const FormPageCard = styled(Card)``;
export const NextButton = styled(Button)``;
export const LeftButton = styled(IconButton)``;
