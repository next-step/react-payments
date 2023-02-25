import { Colors } from '@/styles/colors';
import styled from '@emotion/styled';

export const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;

  display: flex;
  align-items: center;
`;

export const CardBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardChip = styled.div<{
  size: 'small' | 'big';
}>`
  width: ${({ size }) => (size === 'big' ? '55.04px' : '40px')};
  height: ${({ size }) => (size === 'big' ? '35.77px' : '26px')};

  font-size: 24px;

  background: ${({ theme }) => theme.colors.brown};
  border-radius: 4px;
`;

export const CardContainer = styled.div<{
  size: 'small' | 'big';
  cardColor: Colors;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => (size === 'big' ? '290px' : '208px')};
  height: ${({ size }) => (size === 'big' ? '180px' : '130px')};

  background: ${({ theme, cardColor }) => theme.colors[cardColor]};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding-bottom: 10px;
`;
export const CardBottomNumber = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardText = styled.div<{
  size: 'small' | 'big';
}>`
  margin: 0 16px;
  font-size: ${({ size }) => (size === 'big' ? '18px' : '14px')};
  line-height: ${({ size }) => (size === 'big' ? '20px' : '16px')};
  vertical-align: middle;
  font-weight: 400;
`;
