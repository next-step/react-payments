import Chip from '../../components/atoms/Chip';
import '../../../styles/card.css';

export default {
  title: 'Atoms/Chip',
  component: Chip,
  argTypes: {
    size: {
      description: 'Card size',
      control: { type: 'inline-radio', options: ['big', 'small'] },
      options: ['big', 'small'],
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
