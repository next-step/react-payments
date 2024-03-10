import CardPreview from '../../components/molecules/CardPreview';
import '../../../styles/index.css';

export default {
  title: 'Molecules/CardPreview',
  component: CardPreview,
  argTypes: {
    size: {
      description: 'Card size',
      control: { type: 'inline-radio', options: ['big', 'small'] },
      options: ['big', 'small'],
    },
    card: {
      description: 'Card Info',
      control: { type: 'object' },
      options: ['big', 'small'],
    },
  },
  args: {
    card: {
      cardNumber: ['', '', '', ''],
      expiration: {
        mm: '',
        yy: '',
      },
      user: '',
      securityCode: '',
      password: ['', ''],
    },
  },
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Big = {
  args: {
    size: 'big',
  },
};

export const Small = {
  args: {
    size: 'small',
  },
};
