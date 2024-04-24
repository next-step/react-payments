import clsx from 'clsx';

import { Text } from '@/components/atoms/Text';

interface Props {
  cardNumber: string;
  isBig?: boolean;
}

export const CardNumber = ({ cardNumber, isBig }: Props) => {
  return (
    <div className="card-bottom__number">
      <Text className={clsx('card-text', { 'card-text__big': !!isBig })}>{cardNumber}</Text>
    </div>
  );
};
