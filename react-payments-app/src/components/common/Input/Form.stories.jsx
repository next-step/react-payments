import Form from './Form';

import CardNumbersInput from '../../domain/CardInput/CardNumbers/CardNumbersInput';
import { CardProvider } from '../../../store/CardContext';
import CardExpirationDateInput from '../../domain/CardInput/CardExpirationDate/CardExpirationDateInput';

import CardPasswordInput from '../../domain/CardInput/CardPassword/CardPasswordInput';
import CardOwnerInput from '../../domain/CardInput/CardOwner/CardOwnerInput';
import CardCVCInput from '../../domain/CardInput/CardCVCInput/CardCVCInput';

export default {
  title: 'component/Common/Form',
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const CardRegistrationForm = Template.bind({});
CardRegistrationForm.args = {
  handleSubmit: () => alert('submitted'),
  error: '닉네임은 10글자 이하로 작성해 주세요.',
  children: (
    <CardProvider>
      <CardNumbersInput />
      <CardExpirationDateInput />
      <CardOwnerInput />
      <CardCVCInput />
      <CardPasswordInput />
    </CardProvider>
  ),
};
