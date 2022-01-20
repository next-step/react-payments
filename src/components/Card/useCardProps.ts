import { CardProps } from './type';
import { INIT_CARD_STATE } from '@/constants/index';

const useCardProps = ({
  cardNumber,
  expiryDate,
  owner,
  ...others
}: CardProps) => {
  const getTextWithHyphenAndAsterisk = (
    cardNumber: CardProps['cardNumber']
  ) => {
    return cardNumber
      ?.reduce((arr, v, i) => {
        arr[i] = v && i > 1 ? Array(`${v}`.length).fill('o').join('') : v;
        return arr;
      }, Array(cardNumber.length).fill(''))
      .filter((v) => v)
      .join(' - ');
  };

  const getExpiryDateWithSlash = (expiryDate: CardProps['expiryDate']) => {
    return expiryDate?.every((v) => v)
      ? expiryDate.join(' / ')
      : expiryDate?.join('');
  };

  const defaultProps: CardProps = {
    ...INIT_CARD_STATE,
    size: 'small',
    bgColor: '',
    owner: 'NAME',
  };

  return {
    ...defaultProps,
    ...others,
    cardNumber: getTextWithHyphenAndAsterisk(cardNumber),
    expiryDate: getExpiryDateWithSlash(expiryDate) || 'MM / YY',
    owner: owner || 'NAME',
  };
};

export default useCardProps;
