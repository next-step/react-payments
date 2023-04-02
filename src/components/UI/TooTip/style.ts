import { Box } from '@/components/UI';
import { styled } from '@/lib/stitches.config';

export const StyledToolTopWrapper = styled(Box, {
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
});

export const StyledToolTip = styled('p', {
  backgroundColor: '$grey4',
  color: '$grey1',
  padding: '$2',
  borderRadius: '10px',
  position: 'absolute',
  whiteSpace: 'nowrap',
  marginTop: '$1',
  top: '-50px',
  zIndex: 10,
});
