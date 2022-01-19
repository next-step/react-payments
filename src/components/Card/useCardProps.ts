import { CardProps } from './type';

const useCardProps = ({ ...props }: CardProps): CardProps => {
  const defaultProps: CardProps = {
    size: 'small',
    bgColor: '',
    company: '',
    cardNumber: [],
    owner: 'NAME',
    expiryDate: [],
  };

  return {
    ...defaultProps,
    ...props,
  };
};

export default useCardProps;
