import styled from 'styled-components';
import { Card, Input, Text, Button } from 'components/common';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  margin-top: 100px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin: 40px 0px;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 20px;
  margin-top: 30px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  text-align: right;
  margin: 30px;
`;
export const AliasCard = styled(Card)``;
export const AliasInput = styled(Input)``;
export const AliasText = styled(Text)``;
export const NextButton = styled(Button)``;
