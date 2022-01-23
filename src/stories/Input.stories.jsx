import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Text = () => <Input type="text" />;
export const Password = () => <Input type="password" />;
