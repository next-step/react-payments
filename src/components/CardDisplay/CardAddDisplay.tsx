import { Button, Typography } from '@/shared/components';
import { styleToken } from '@/shared/styles';

type CardAddDisplayProps = {
  onClick?: () => void;
};
export const CardAddDisplay = (props: CardAddDisplayProps) => (
  <Button
    alignItems="center"
    justifyContent="center"
    width="208px"
    height="130px"
    backgroundColor={styleToken.color.gray300}
    _hover={{ backgroundColor: styleToken.color.gray300 }}
    {...props}
  >
    <Typography variant="headline" fontSize="36px" color={styleToken.color.gray600}>
      +
    </Typography>
  </Button>
);
