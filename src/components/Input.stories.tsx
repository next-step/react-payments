import Input from "./Input";

export default {
  component: Input,
  title: "Input",
};

function Template(args: typeof Input) {
  return <Input {...args} />;
}

export const Default = Template.bind({});
Default.arguments = {
  type: "password",
};
