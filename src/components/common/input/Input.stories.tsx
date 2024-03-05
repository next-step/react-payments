import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Text = () => <Input type="text" className="input-basic" />;
export const Password = () => <Input type="password" className="input-basic" />;
