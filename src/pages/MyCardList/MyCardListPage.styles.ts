import styled from 'styled-components';
import { Card, Text } from 'components/common';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ScrollContainer = styled.div`
  height: 80vh;
  padding: 30px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    opacity: 0;
  }
  &::-webkit-scrollbar-thumb {
    height: 5%;
    background: #636266;
    border-radius: 7px;
  }
  // 파이어폭스
  scrollbar-width: thin;
  scrollbar-color: #636266;
`;
export const AddCard = styled(Card)`
  margin-bottom: 30px;
`;
export const Title = styled(Text)`
  margin: 20px;
  display: block;
`;
export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
`;
export const MyCard = styled(Card)``;
export const MyCardText = styled(Text)``;
