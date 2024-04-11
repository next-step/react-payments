import { styleToken, Button, Typography } from '@/shared';

type CardAddDisplayProps = {
  onClick?: () => void;
};

export const CardAddDisplay = ({ onClick }: CardAddDisplayProps) => (
  <Button
    alignItems="center"
    justifyContent="center"
    width="208px"
    height="130px"
    backgroundColor={styleToken.color.gray300}
    onClick={onClick}
    _hover={{ backgroundColor: styleToken.color.gray300 }}
  >
    <Typography variant="headline" fontSize="36px" color={styleToken.color.gray600}>
      +
    </Typography>
  </Button>
);
