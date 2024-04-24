import clsx from 'clsx';

import { CARD_CHIP_SIZE } from '@/features/card/constants/cardShape';
import { CardChipSize } from '@/features/card/types/cardUITypes';

interface Props {
  size: CardChipSize;
}

export const CardChip = ({ size }: Props) => {
  return (
    <div
      className={clsx({
        'big-card__chip': size === CARD_CHIP_SIZE.big,
        'small-card__chip': size === CARD_CHIP_SIZE.small,
      })}
    />
  );
};
