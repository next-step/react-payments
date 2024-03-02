import { FormProvider, useForm } from "react-hook-form";
import Input from ".";

export default {
  title: "atoms/input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
};

const Form = (props) => {
  const { children } = props;
  const form = useForm();

  return <FormProvider {...form}>{children}</FormProvider>;
};

const Template = (args) => (
  <Form>
    <Input {...args} />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Type something...",
  name: "input",
};
