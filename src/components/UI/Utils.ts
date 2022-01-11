import styled from 'styled-components';

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexColumnCenter = styled(FlexCenter)`
  flex-direction: column;
`;
