import Input from '../../components/atoms/Input';
import '../../../styles/input.css';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    type: {
      description: 'type',
      value: 'text',
      control: { type: 'inline-radio', options: ['text', 'password'] },
      options: ['text', 'password'],
    },
    placeholder: {
      description: 'placeholder',
      value: 'placeholder',
      control: { type: 'text' },
    },
    maxLength: {
      description: 'max length',
      control: { type: 'number' },
    },
    readOnly: {
      description: 'read only',
      value: 'true',
      control: { type: 'inline-radio', options: [true, false] },
      options: [true, false],
    },
  },
  args: {
    type: 'text',
    className: 'input-basic',
    placeholder: 'placeholder',
    maxLength: 5,
    readOnly: false,
  },
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Type = {
  args: {
    type: 'text',
  },
};

// export const PlaceHolder = {
//   args: {
//     placeHolder: 'placeholder',
//   },
// };

// export const MaxLength = {
//   args: {
//     maxLength: 10,
//   },
// };

// export const ReadOnly = {
//   args: {
//     readonly: false,
//   },
// };
