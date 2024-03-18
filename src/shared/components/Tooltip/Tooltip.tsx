import { Circle, Typography } from '@/shared/components';
import { styleToken } from '@/shared/styles';

export const Tooltip = () => (
  <Circle
    width="27px"
    height="27px"
    backgroundColor="unset"
    border={`1px solid ${styleToken.color.gray400}`}
    cursor="pointer"
  >
    <Typography color={styleToken.color.gray400} variant="title" fontWeight={styleToken.fontWeight.bold}>
      ?
    </Typography>
  </Circle>
);
