import clsx from 'clsx';

import { Text } from '@/components/atoms/Text';

interface Props {
  ownerName: string;
  expirationDateMMYY: string;
  textClassName?: 'card-text__big';
}

export const CardInfo = ({ ownerName, expirationDateMMYY, textClassName }: Props) => {
  return (
    <div className="card-bottom__info">
      <Text className={clsx('card-text', textClassName)}>{ownerName}</Text>
      <Text className={clsx('card-text', textClassName)}>{expirationDateMMYY}</Text>
    </div>
  );
};
