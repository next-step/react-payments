import { CardProps } from './type';
import { INIT_CARD_STATE, DIGITS } from '@/constants/index';

const useCardProps = ({
  cardNumber,
  expiryDate,
  owner,
  ...others
}: CardProps) => {
  const getCardNumberFormat = (cardNumber: CardProps['cardNumber']) => {
    return cardNumber
      ?.reduce((arr, v, i) => {
        arr[i] = v && i > 1 ? Array(`${v}`.length).fill('o').join('') : v;
        return arr;
      }, Array(DIGITS['cardNumber']).fill(''))
      .filter((v) => v)
      .join(' - ');
  };

  const getExpiryDateFormatWithSlash = (
    expiryDate: CardProps['expiryDate']
  ) => {
    return Array.isArray(expiryDate) && expiryDate?.every((v) => v)
      ? expiryDate?.join(' / ')
      : expiryDate?.join('');
  };

  const defaultProps: CardProps = {
    cardNumber: INIT_CARD_STATE['cardNumber'],
    expiryDate: INIT_CARD_STATE['expiryDate'],
    company: INIT_CARD_STATE['company'],
    owner: 'NAME',
    size: 'small',
    bgColor: '',
  };

  return {
    ...defaultProps,
    ...others,
    cardNumber: getCardNumberFormat(cardNumber),
    expiryDate: getExpiryDateFormatWithSlash(expiryDate) || 'MM / YY',
    owner: owner || 'NAME',
  };
};

export default useCardProps;
