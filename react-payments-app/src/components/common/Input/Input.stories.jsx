import Input from './Input';
import './input.css';
import '../../../styles/utils.css';
import { MAX_INPUT_LENGTH } from '../../../constants/numbers';

export default {
  title: 'Component/Common/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;
export const Default = Template.bind({});

export const CardCVCInput = Template.bind({});
CardCVCInput.args = {
  name: '보안코드(CVC/CVV)',
  className: 'input-basic w-25',
  type: 'password',
  onChange: () => console.log(),
  placeholder: '***',
  maxLength: MAX_INPUT_LENGTH.CVC,
  required: true,
};

export const CardOwnerInput = Template.bind({});
CardOwnerInput.args = {
  name: '카드 소유자 이름(선택)',
  className: 'input-basic input-bigger-text',
  type: 'text',
  onChange: () => alert("it's changing"),
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  maxLength: MAX_INPUT_LENGTH.CARD_OWNER,
  required: false,
};

export const CardNumbers = Template.bind({});
CardNumbers.args = {};
