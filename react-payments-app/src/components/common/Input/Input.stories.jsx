import Input from './Input';
import './input.css';
import '../../../styles/utils.css';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const CardCVCInput = Template.bind({});
CardCVCInput.args = {
  name: '보안코드(CVC/CVV)',
  className: 'input-basic w-25',
  type: 'password',
  onChange: () => console.log(),
  placeholder: '***',
  maxLength: 3,
  required: true,
};
